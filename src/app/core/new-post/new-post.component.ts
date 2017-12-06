import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PostService } from '../post/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  constructor(private _modalService: BsModalService,
              private _postService: PostService) { }

  modalRef: BsModalRef;
  model = {};

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this._modalService.show(template);
  }

  createSampleTextPost(): void {
    this._postService.makeTextPost({
      title: "I made this!",
      body: "I sure did make a text post",
      tags: ["And everything is working perfectly"]
    }).subscribe(
      (res) => {
        console.log(res);
        if (!res.success) {
          alert("there seems to be a problem");
        } else {
          alert("post created successfully");
          this.modalRef.hide();
        }
      }
    );
  }

  submitTextPost(): void {
    this._postService.makeTextPost({
      title: this.model['title'],
      body: this.model['body'],
      tags: []
    }).subscribe((res) => {
      console.log(res);
      if (!res.success) {
        alert("there seems to be a problem");
      } else {
        this.modalRef.hide();
      }
    });
  }

}
