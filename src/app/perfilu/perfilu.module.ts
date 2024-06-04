import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfiluPageRoutingModule } from './perfilu-routing.module';

import { PerfiluPage } from './perfilu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfiluPageRoutingModule
  ],
  declarations: [PerfiluPage]
})
export class PerfiluPageModule {}
