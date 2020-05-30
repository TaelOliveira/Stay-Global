import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss'],
})
export class Question1Component implements OnInit {

  @ViewChild('content', { static: true }) private content: IonContent;

  constructor(
    public modal: ModalController,
  ) { }

  ngOnInit() { }

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
