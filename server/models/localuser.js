const Mongoose = require('mongoose');
const Bcrypt   = require('bcrypt');
const Crypto   = require('crypto');
const request = require('request');

const Session  = require('./session.js');

const LocalUserSchema = Mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: String
    },
    bio: String,
    email: String
},{
    collection: "localuser"
});

const LocalUser = Mongoose.model('LocalUser',LocalUserSchema,);

module.exports = LocalUser;

module.exports.getAllInfo = (callback) => {
    LocalUser.findOne(callback)
}

module.exports.createUserIfNoneExists = (callback) => {
    localuser = new LocalUser({
        username: "i_love_alice",
        password: "not_set",
        url: "localhost:3002",
        name: "carol",
        bio: "Carol | 20 | Gemini | INTP",
        email: "example@example.com"
    });
    LocalUser.remove({}, (err) => {
        if (err) {
            callback(err)
        } else {
            localuser.save(callback);
        }
    });
}

module.exports.getProfile = (callback) => {
    LocalUser.findOne((err,user) => {
        if (err) { callback(err) }
        else {
            callback(null, {name: user.name, url: user.url, 
                            bio: user.bio, email: user.email });
        }
    });
}

module.exports.getForeignProfile = (userUrl,callback) => {
    let url = `http://${userUrl}/api/profile`;
    request(url, (err,res,body) => {
        if (err) {
            console.log(err)
            callback(err)
        } else {
            try {
                body = JSON.parse(body);
            } catch (e) {
                body = null
            }
            if (body) {
                callback(null,body.profile);
            } else {
                callback("invalid response");
            }
        };
    });
}

module.exports.changePasswordAdmin = (password,callback) => {
    LocalUser.findOne((err,localuser) => {
        if (err) callback(err);
        var hash = Bcrypt.hashSync(password, 10);
        console.log(hash);
        localuser.set({ password: hash });
        localuser.save(callback);
    });
}

module.exports.login = (username,password,callback) => {
    LocalUser.findOne((err,localuser) => {
        if (err || !localuser) callback(err);
        if (username == localuser.username
           && Bcrypt.compareSync(password,localuser.password))  {
             var authtoken = Session.genNewSession();
             callback(null,authtoken);
        } else {
            callback("Invalid credentials")
        }
    });
}

module.exports.logout = (token,callback) => {
    Session.deleteSession(token, callback)
}

