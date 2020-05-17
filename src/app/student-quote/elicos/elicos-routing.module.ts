import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElicosPage } from './elicos.page';

const routes: Routes = [
  {
    path: '',
    component: ElicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElicosPageRoutingModule {}
