import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { PostData } from '../../interfaces/user-options';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  ios: boolean;

  tracks: {name: string, icon: string, isChecked: boolean}[] = [];
  segment = 'primary';
  posts: any = [];
  subscribtion: Subscription;

  constructor(private service: ServiceService, private router: Router, private nav: NavController) { }

  ngOnInit() {
    this.subscribtion = this.service.getAllPosts(10).subscribe((data: PostData)=> {
      this.posts = data;
    })
  }

  goBack(){
    this.nav.back()
  }

  goToChat(data) {
    let params = {
      chatProfilePic: data.download_url,
      chatName:data.author
    }

    this.router.navigate(['message-details'], {queryParams: params})

  }

}
