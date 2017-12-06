import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private _postService: PostService) { }
  posts = [];
  ngOnInit(): void {
    console.log("initialized!");
    this._postService.getPosts().subscribe(
      (res) => {
        if (res.success) {
          this.posts = res.posts;
        } else {
          alert("error loading posts, see console");
          console.log(res.message);
        }
      },
      console.log,
      () => {
        console.log("finished");
        console.log(this.posts);
      }
    );
  }
}
