# Jester

This project requires a working mongodb installation to be running and
accessable

## Configuration and Profiles

The app can contain multiple profiles, which simulate different users, defined
in `/server/config.js`. Each profile defines a database field, which should be
a valid Mongodb database (the *database*, not the installation i.e
mongodb://localhost/jester, not just mongodb://localhost). It also contains
a port field, which is the port that the node process will claim.

To run the server, use `node app [profile]`. The default profiles are "1" and
"2", as well as "alice", "bob", and "carol"

## API

see the jester-API repository README for information about the API

(some changes have been made, such as the removal of authentication, which will
eventually be put back in)
