import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServererrorPage } from './servererror.page';

const routes: Routes = [
  {
    path: '',
    component: ServererrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServererrorPageRoutingModule {}
