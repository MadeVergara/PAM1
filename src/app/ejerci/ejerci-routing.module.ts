import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjerciPage } from './ejerci.page';

const routes: Routes = [
  {
    path: '',
    component: EjerciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjerciPageRoutingModule {}
