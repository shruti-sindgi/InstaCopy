import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.page.html',
  styleUrls: ['./message-details.page.scss'],
})
export class MessageDetailsPage implements OnInit {

  chatProfilePic: string;
  chatName: string;
  messageList = [{sender: 1, message: "Hi"}, {sender: 0, message: "Hello"}, {sender: 0, message: "How are you ?"}, {sender: 1, message: "I am fine"}, {sender: 1, message: "How about you ?"}, {sender: 0, message: "Fine bro"}, {sender: 1, message: "Then , What special ?"}]

  constructor(private activeRoute: ActivatedRoute, private nav: NavController) {
    const params = this.activeRoute.snapshot.queryParams
    this.chatProfilePic = params.chatProfilePic;
    this.chatName = params.chatName;
  }

  ngOnInit() {
  }

  goBack() {
    this.nav.back();
  }



}
