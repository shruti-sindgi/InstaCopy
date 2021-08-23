import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPage } from './about';
import { AboutPageRoutingModule } from './about-routing.module';
import { PopoverPage } from '../about-popover/about-popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage, PopoverPage],
  entryComponents: [PopoverPage],
  bootstrap: [AboutPage],
})
export class AboutModule {}
