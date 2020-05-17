import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentQuotePageRoutingModule } from './student-quote-routing.module';

import { StudentQuotePage } from './student-quote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentQuotePageRoutingModule
  ],
  declarations: [StudentQuotePage]
})
export class StudentQuotePageModule {}
