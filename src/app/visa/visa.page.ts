import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.page.html',
  styleUrls: ['./visa.page.scss'],
})
export class VisaPage implements OnInit {

  constructor(
    public modal1: ModalController,
    public modal2: ModalController,
    public modal3: ModalController,
  ) { }

  ngOnInit() {
  }

  async topic1() {
    const modal1 = await this.modal1.create({
      component: Question1Component,
    });
    return await modal1.present();
  }

  async topic2() {
    const modal2 = await this.modal2.create({
      component: Question2Component,
    });
    return await modal2.present();
  }

  async topic3() {
    const modal3 = await this.modal3.create({
      component: Question3Component,
    });
    return await modal3.present();
  }

}
