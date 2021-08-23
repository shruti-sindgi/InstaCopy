import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchListPage } from './search-list';
const routes: Routes = [
  {
    path: '',
    component: SearchListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakerListPageRoutingModule {}
