import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss'],
})
export class Question3Component implements OnInit {

  constructor(
    public modal: ModalController,
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.modal.dismiss({
      'dismissed': true
    });
  }

}
