import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServererrorPageRoutingModule } from './servererror-routing.module';

import { ServererrorPage } from './servererror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServererrorPageRoutingModule
  ],
  declarations: [ServererrorPage]
})
export class ServererrorPageModule {}
