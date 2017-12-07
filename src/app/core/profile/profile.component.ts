import { TemplateRef, Input, Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _modalService: BsModalService,
              private _profileService: ProfileService ) { }

  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this._modalService.show(template);
  }

  @Input() url: String;

  user: {
    name: String,
    url: String,
    email: String,
    bio: String,
  }

  ngOnInit() {
    this.user = {
      name: "unknown/offline user",
      url: this.url,
      email: "",
      bio: "Unable to fetch user data, user is probably offline. this will be fixed eventually"
    }
    console.log(this.url);
    this._profileService.getProfile(this.url).subscribe((res) => {
      console.log(`got result: ${JSON.stringify(res)}`);
      if (res && res.success) {
        this.user = res.profile;
      } else {
        console.log("error getting profile info, using defaults");
      }
    });

  }

}
