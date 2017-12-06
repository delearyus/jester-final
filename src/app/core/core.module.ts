import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostService } from './post/posts.service';
import { PostComponent } from './post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPostComponent } from './new-post/new-post.component';

import { ModalModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [
    DashboardComponent,
    NewPostComponent,
    RefreshComponent,
  ],
  declarations: [PostComponent, DashboardComponent, NewPostComponent, RefreshComponent],
  providers: [
    PostService,
  ]
})
export class CoreModule { }
