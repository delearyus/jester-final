import { Component, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post;

  constructor() { }

}
