import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss'],
})
export class Question2Component implements OnInit {

  @ViewChild('content', { static: true }) private content: IonContent;

  constructor(
    public modal: ModalController,
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.modal.dismiss({
      'dismissed': true
    });
  }

  ScrollToTop() {
    this.content.scrollToTop()
  }

  scrollTo(elementId) {
    var y = document.getElementById(elementId).offsetTop;
    this.content.scrollToPoint(0, y, 1000);
  }

}
