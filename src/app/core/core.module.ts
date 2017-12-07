import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostService } from './post/posts.service';
import { ProfileService } from './profile/profile.service';
import { PostComponent } from './post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPostComponent } from './new-post/new-post.component';

import { ModalModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { GravatarModule } from 'ng2-gravatar-directive';

import { RefreshComponent } from './refresh/refresh.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    GravatarModule,
  ],
  exports: [
    DashboardComponent,
    NewPostComponent,
    RefreshComponent,
    ProfileComponent,
  ],
  declarations: [PostComponent, DashboardComponent, NewPostComponent, RefreshComponent, ProfileComponent],
  providers: [
    PostService,
    ProfileService,
  ]
})
export class CoreModule { }
