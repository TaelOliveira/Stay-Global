import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElicosPageRoutingModule } from './elicos-routing.module';

import { ElicosPage } from './elicos.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ElicosPageRoutingModule
  ],
  declarations: [ElicosPage]
})
export class ElicosPageModule {}
