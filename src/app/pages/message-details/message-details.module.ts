import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageDetailsPageRoutingModule } from './message-details-routing.module';

import { MessageDetailsPage } from './message-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageDetailsPageRoutingModule
  ],
  declarations: [MessageDetailsPage]
})
export class MessageDetailsPageModule {}
