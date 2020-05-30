import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss'],
})
export class Question2Component implements OnInit {

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
