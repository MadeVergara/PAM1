import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjerciPageRoutingModule } from './ejerci-routing.module';

import { EjerciPage } from './ejerci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjerciPageRoutingModule
  ],
  declarations: [EjerciPage]
})
export class EjerciPageModule {}
