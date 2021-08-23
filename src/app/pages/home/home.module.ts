import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home';
import { HomePageRoutingModule } from './home-routing.module';
import { PostsComponent } from '../../components/posts/posts.component';
import { StoriesComponent } from '../../components/stories/stories.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    PostsComponent,
    StoriesComponent
  ],
  entryComponents: [
  ]
})
export class HomeModule { }
