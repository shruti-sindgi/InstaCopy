import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'page-search-list',
  templateUrl: 'search-list.html',
  styleUrls: ['./search-list.scss'],
})
export class SearchListPage {
  speakers: any[] = [];
  posts: any[] = [];
  queryText: string;

  constructor(public confData: ConferenceData, private service: ServiceService) {}

  ionViewDidEnter() {
    this.service.getAllPosts(50).subscribe((data: any[])=> {
      this.posts = data
    })
  }

  updateSchedule() {
    
  }
}
