import { Component } from '@angular/core';
import { PostService } from '../post/posts.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent {

  constructor(private _postService: PostService) { }

  refresh(): void {
    this._postService.refreshDashboard();
    window.location.reload();
  }

}
