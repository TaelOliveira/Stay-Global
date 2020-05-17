import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})

export class ContactPage implements OnInit {

  contactForm: FormGroup;
  numberOfCharacters = 0;
  firstName;
  lastName;
  email;
  phone;
  message;

  validations = {
    'firstName': [
      { type: 'required', message: 'First Name is required!' }
    ],
    'lastName': [
      { type: 'required', message: 'Last Name is required!' }
    ],
    'email': [
      { type: 'required', message: 'Email is required!' },
      { type: 'email', message: 'Email is not valid!' }
    ],
    'phone': [
      { type: 'required', message: 'Phone number is required!' },
      { type: 'pattern', message: 'This is not a valid phone number!' }
    ],
    'message': [
      { type: 'required', message: 'Message is required!' },
      { type: 'maxLength', message: 'Message is required!' }
    ],
  }

  constructor(
    private formBuilder: FormBuilder,
    private afs: AngularFirestore,
    public toastController: ToastController,
    public db: DatabaseService,
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("[0-9 ]{9}")]],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  onKeyUp(event: any): void {
    this.numberOfCharacters = event.target.value.length;
  }

  getValuesFromForm() {
    this.firstName = this.contactForm.value['firstName'];
    this.lastName = this.contactForm.value['lastName'];
    this.email = this.contactForm.value['email'];
    this.phone = this.contactForm.value['phone'];
    this.message = this.contactForm.value['message'];
  }

  async submit() {
    this.getValuesFromForm();

    const id = this.afs.createId();
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      message: this.message,
      sent: new Date(),
    };

    if (this.db.updateAt(`contact/${id}`, data)) {
      this.presentToast("Message sent!", 'bottom', 3000);
      this.contactForm.reset();
      this.numberOfCharacters = 0;
    }
    else {
      this.presentToast("Please, try again!", 'bottom', 3000);
    }
  }

  async presentToast(message, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      position: position,
      duration: duration,
      cssClass: 'myToast',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}