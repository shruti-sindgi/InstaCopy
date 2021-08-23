import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  options = [{name: "Edit Profile"}, {name: 'Promotions'}, {name: "Insights"}];
  segment = '0';
  categories: Array<{name: string, image: string}> = [{name: "Romantic", image: ""}, {name: "YouTube", image: ""}, {name: "Photoshoot", image: ""}];
  posts: any = [];
  subscribtion: Subscription;
  profilePic = 'https://img.freepik.com/free-photo/gray-painted-background_53876-94041.jpg?size=626&ext=jpg&ga=GA1.2.2037429681.1628812800';

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.subscribtion = this.service.getAllPosts(50).subscribe((data: any[])=> {
      this.posts = data;
      this.profilePic = data[21].download_url;
      for(let i = 0; i < 3; i++) {
        this.categories[i].image = data[i].download_url;
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscribtion.unsubscribe();
  }

}
