import { Component, Input, } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post;

  constructor() { }


  // not necessary for production, but good for testing to make sure the models
  // aren't fucked
  get debugInfo() { return JSON.stringify(this.post); }


}
