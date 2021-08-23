import { Component, Input, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  @Input() id: string;
  @Input() author: string;
  @Input() url: string;

  constructor(
    private socialSharing: SocialSharing) { }

  ngOnInit() { }

  public share() {
    let message = `${this.author} Photo @${this.author} It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`
    // Share 
    this.socialSharing.share(message, this.author, this.url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}
