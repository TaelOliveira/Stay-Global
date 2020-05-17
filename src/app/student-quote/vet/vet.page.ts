import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.page.html',
  styleUrls: ['./vet.page.scss'],
})
export class VetPage implements OnInit {

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  userDetailsForm: FormGroup;
  schoolForm: FormGroup;
  firstName;
  lastName;
  email;
  phone;
  expireDate;
  createNewId;
  schoolName;
  courseName;
  isShown = false;
  schoolInformation = true;
  schoolSelected = false;
  selectedSchool;
  startDate;
  endDate;
  weeksNumber;
  visaDuration;
  month = 4.286;
  showSchoolDetails = true;
  hideSchoolDetails = false;
  showSchoolFees = true;
  hideSchoolFees = false;
  showStudentHealthCover = true;
  hideStudentHealthCover = false;
  studentHealthPrice = 40;
  totalStudentHealth;
  showImmi = true;
  hideImmi = false;
  immigrationFee = 620;
  creditCardFee = 0.014;
  showHealthExams = true;
  hideHealthExams = false;
  healthExamination = 322.79;
  showTotal = true;
  hideTotal = false;
  duration;
  selectedCourse;
  course = false;
  getDate = new Date();

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
    'expireDate': [
      { type: 'required', message: 'Expire date is required!' }
    ],
  };

  Pacific = {
    name: "Pacific Training Group",
    price: 1200,
    website: "https://pacifictraining.edu.au/",
    start_date: "10-05-2020",
    tuition_fee: 100,
    enrolment_fee: 100,
    material_fee: 100,
    courses: [
      { name: 'Adavanced Diploma in Business', duration: 24 },
      { name: 'IT', duration: 36 },
    ],
  }

  ACBI = {
    name: "ACBI",
    price: 1100,
    website: "https://www.acbi.edu.au/",
    start_date: "10-05-2020",
    tuition_fee: 100,
    enrolment_fee: 100,
    material_fee: 100,
    courses: [
      { name: 'IT', duration: 36 },
      { name: 'ChildCare', duration: 36 }
    ],
  }

  International_House = {
    name: "International House",
    price: 1300,
    website: "https://ihsydney.com.au/",
    start_date: "10-05-2020",
    tuition_fee: 100,
    enrolment_fee: 100,
    material_fee: 100,
    courses: [
      { name: 'Business', duration: 36 },
      { name: 'Marketing', duration: 36 }
    ],
  }

  schools = [this.Pacific, this.ACBI, this.International_House];

  slideOpts = {
    initialSlide: 0,
    allowTouchMove: false,
  };

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public alertController: AlertController,
  ) { }

  ionViewWillEnter() {
    this.slides.slideTo(0);
  }

  ionViewWillLeave() {
    this.clearForm();
    this.schoolSelected = false;
    this.course = false;
    this.selectedCourse = null;
  }

  ngOnInit() {
    this.userDetailsForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("[0-9 ]{9}")]],
      expireDate: ['', Validators.required],
    });

    this.schoolForm = this.formBuilder.group({
      schoolName: ['', Validators.required],
    });
  }

  async goToQuote() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '<strong>Are you sure you want to exit?</strong>',
      buttons: [
        {
          text: 'YES',
          role: 'yes',
          handler: data => {
            this.router.navigate(['student-quote']);
            this.clearForm();
          }
        },
        {
          text: 'NO',
          role: 'no',
        }
      ]
    });
    await alert.present();
  }

  getValuesFromForm() {
    this.firstName = this.userDetailsForm.value['firstName'];
    this.lastName = this.userDetailsForm.value['lastName'];
    this.email = this.userDetailsForm.value['email'];
    this.phone = this.userDetailsForm.value['phone'];
    this.expireDate = this.userDetailsForm.value['expireDate'];

    this.schoolName = this.schoolForm.value['schoolName'];

    this.getDates()
  }

  clearForm() {
    this.userDetailsForm.reset();
    this.schoolForm.reset();
    this.selectedCourse = null;
  }

  getCourse() {
    let course = this.selectedCourse;
    this.courseName = course.name;
    this.duration = course.duration;
    console.log(this.courseName, this.duration);
    this.course = true;
  }

  getSelectedSchool() {
    const filteredSchools = this.schools.filter(school => school.name === this.schoolForm.value['schoolName']);

    this.selectedSchool = filteredSchools.length > 0 ? filteredSchools[0] : null;

    this.schoolSelected = true;
  }

  getDates() {
    var userVisaExpire = new Date(this.expireDate);
    var start = userVisaExpire.setDate(userVisaExpire.getDate() + 1);
    this.startDate = start;

    var expireVisa = new Date(start);
    this.endDate = expireVisa.setMonth(expireVisa.getMonth() + this.duration);

    this.totalStudentHealth = this.duration * this.studentHealthPrice;
  }

  generateQuote() {
    this.getValuesFromForm();
    console.log(this.selectedSchool)
    /* this.createNewId = this.afs.createId();
    const id = this.createNewId;

    const date = this.expireDate;
    const dateFormat = date.split('T')[0];
    const visaExpireDate = new Date(dateFormat);

    const data = {
      createdAt: new Date(),
      name: this.firstName + ' ' + this.lastName,
      email: this.email,
      phone: this.phone,
      visaExpireDate: visaExpireDate,
      school: this.schoolName,
      course: this.courseName,
    }
    this.db.updateAt(`Vet-Quotes/${id}`, data); */
  }

  seeSchoolInformation() {
    if (this.isShown == false) {
      this.isShown = true;
      this.schoolInformation = false;
    }
    else {
      this.isShown = false;
      this.schoolInformation = true;
    }
  }

  schoolDetails() {
    if (this.showSchoolDetails == false) {
      this.showSchoolDetails = true;
      this.hideSchoolDetails = false
    }
    else {
      this.showSchoolDetails = false;
      this.hideSchoolDetails = true;
    }
  }

  schoolFees() {
    if (this.showSchoolFees == false) {
      this.showSchoolFees = true;
      this.hideSchoolFees = false;
    }
    else {
      this.showSchoolFees = false;
      this.hideSchoolFees = true;
    }
  }

  studentHealthCover() {
    if (this.showStudentHealthCover == false) {
      this.showStudentHealthCover = true;
      this.hideStudentHealthCover = false;
    }
    else {
      this.showStudentHealthCover = false;
      this.hideStudentHealthCover = true;
    }
  }

  immi() {
    if (this.showImmi == false) {
      this.showImmi = true;
      this.hideImmi = false;
    }
    else {
      this.showImmi = false;
      this.hideImmi = true;
    }
  }

  healthExams() {
    if (this.showHealthExams == false) {
      this.showHealthExams = true;
      this.hideHealthExams = false;
    }
    else {
      this.showHealthExams = false;
      this.hideHealthExams = true;
    }
  }

  total() {
    if (this.showTotal == false) {
      this.showTotal = true;
      this.hideTotal = false;
    }
    else {
      this.showTotal = false;
      this.hideTotal = true;
    }
  }

}