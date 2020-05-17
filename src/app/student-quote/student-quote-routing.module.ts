import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentQuotePage } from './student-quote.page';

const routes: Routes = [
  {
    path: '',
    component: StudentQuotePage
  },
  {
    path: 'vet',
    loadChildren: () => import('./vet/vet.module').then( m => m.VetPageModule)
  },
  {
    path: 'elicos',
    loadChildren: () => import('./elicos/elicos.module').then( m => m.ElicosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentQuotePageRoutingModule {}
