import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SearchListPage } from './search-list';
import { SpeakerListPageRoutingModule } from './search-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SpeakerListPageRoutingModule
  ],
  declarations: [SearchListPage],
})
export class SearchListModule {}
