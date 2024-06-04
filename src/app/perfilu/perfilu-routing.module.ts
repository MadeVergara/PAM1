import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfiluPage } from './perfilu.page';

const routes: Routes = [
  {
    path: '',
    component: PerfiluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfiluPageRoutingModule {}
