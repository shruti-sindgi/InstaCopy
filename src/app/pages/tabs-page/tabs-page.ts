import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {


  profilePic = "";
  constructor (private service: ServiceService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getAllPosts(50).subscribe((data)=> {
      this.profilePic = data[21].download_url;
    })
    
  }
}
