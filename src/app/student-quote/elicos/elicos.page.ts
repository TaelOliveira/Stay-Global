import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-elicos',
  templateUrl: './elicos.page.html',
  styleUrls: ['./elicos.page.scss'],
})

export class ElicosPage implements OnInit {

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  userDetailsForm: FormGroup;
  schoolForm: FormGroup;
  weeksForm: FormGroup;
  firstName;
  lastName;
  email;
  phone;
  expireDate;
  createNewId;
  schoolName;
  weeksNumber;
  isShown = false;
  schoolInformation = true;
  schoolSelected = false;
  showSchoolDetails = true;
  hideSchoolDetails = false;
  showStudentHealthCover = true;
  hideStudentHealthCover = false;
  showImmi = true;
  hideImmi = false;
  showHealthExams = true;
  hideHealthExams = false;
  showSchoolFees = true;
  hideSchoolFees = false;
  showTotal = true;
  hideTotal = false;
  selectedSchool;
  visaDuration;
  endDate;
  studentHealthPrice = 40;
  totalStudentHealth;
  immigrationFee = 620;
  creditCardFee = 0.014;
  healthExamination = 322.79;
  getDate = new Date();
  elicosStartDate;
  minDate;
  maxDate;
  startStudies;
  finishStudies;
  startDate;

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
  }

  weeks = [
    { number: 12 },
    { number: 24 },
    { number: 36 },
    { number: 48 },
    { number: 60 },
  ];

  International_House = {
    name: "International House",
    price: 270,
    website: "https://ihsydney.com.au/",
    tuition_fee: 0,
    enrolment_fee: 240,
    material_fee: 150,
    address: "Sydney City: Level 1, 203 Clarence Street, Sydney, NSW 2000",
    email: "enrol@ihsydney.com.au",
    timetable: "MORNING: Monday to Friday 8:00am - 12:15pm" +
      " AFTERNOON: Monday to Friday 5:00pm – 9:15pm"
  }

  ELSIS = {
    name: "ELSIS",
    price: 255,
    website: "https://www.elsis.edu.au/",
    tuition_fee: 0,
    enrolment_fee: 200,
    material_fee: 60,
    address: "Level 2, 545 Kent St., Sydney, NSW 2020, , Phone: +61 2 8766 3500",
    email: "info@elsis.edu.au",
    timetable: "MORNING: Monday to Friday 8:15am - 12:30pm" +
      " AFTERNOON: Monday to Friday 5:10pm – 9:30pm"
  }

  SCOTS = {
    name: "SCOTS",
    price: 220,
    website: "https://www.scotsenglish.edu.au/",
    tuition_fee: 0,
    enrolment_fee: 200,
    material_fee: 160,
    address: "Head Office and Sydney CBD Campus: Level 5, 127 Liverpool Street, Sydney NSW 2000, Phone: +61 2 9146 6358",
    email: "info@scotsenglish.edu.au",
    timetable: "MORNING: Monday to Friday 8:00am - 12:30pm" +
      " AFTERNOON: Monday to Friday 1:00pm – 5:30pm" +
      " EVENING: Monday to Friday 5:45pm – 10:00pm"
  }

  schools = [this.International_House, this.ELSIS, this.SCOTS];

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

    this.weeksForm = this.formBuilder.group({
      weeksNumber: ['', Validators.required],
      elicosStartDate: ['', Validators.required],
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

  formatDate(date) {
    let d = new Date(date),
      day = '' + d.getDate(),
      month = '' + (d.getMonth() + 1),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  getMaxAndMin() {
    var expireDate = this.userDetailsForm.value['expireDate'].split('T')[0];
    var date = moment(expireDate).toDate();
    console.log("Min date", expireDate);
    this.minDate = expireDate;

    var maxDate = new Date(date.getFullYear(), date.getMonth() + 2, date.getDate());
    var date = new Date(maxDate);
    this.maxDate = this.formatDate(date);
    console.log("Max date", this.maxDate);
  }

  getValuesFromForm() {
    this.firstName = this.userDetailsForm.value['firstName'];
    this.lastName = this.userDetailsForm.value['lastName'];
    this.email = this.userDetailsForm.value['email'];
    this.phone = this.userDetailsForm.value['phone'];
    this.expireDate = this.userDetailsForm.value['expireDate'];

    this.schoolName = this.schoolForm.value['schoolName'];

    this.weeksNumber = this.weeksForm.value['weeksNumber'];
    this.elicosStartDate = this.weeksForm.value['elicosStartDate'];

    this.getSelectedSchool();
    this.getDates();
  }

  clearForm() {
    this.userDetailsForm.reset();
    this.schoolForm.reset();
    this.weeksForm.reset();
  }

  clearSchoolAndWeekForms() {
    this.schoolForm.reset();
    this.weeksForm.reset();
  }

  school() {
    this.schoolSelected = true;
  }

  getSelectedSchool() {
    const filteredSchools = this.schools.filter(school => school.name === this.schoolForm.value['schoolName']);

    this.selectedSchool = filteredSchools.length > 0 ? filteredSchools[0] : null;
  }

  getDates() {
    var startStudies = this.weeksForm.value['elicosStartDate'].split('T')[0];
    var dateStart = moment(startStudies).toDate();
    console.log("Start studies:", dateStart)

    var fisnishStudies = new Date(dateStart);
    this.finishStudies = fisnishStudies.setDate(fisnishStudies.getDate() + (this.weeksNumber * 7));
    console.log("Finish Studies:", this.finishStudies);

    var startNewVisa = new Date(this.expireDate);
    var start = startNewVisa.setDate(startNewVisa.getDate() + 1);
    var startDate = start;
    this.startDate = start;
    console.log("Start Visa:", startDate);

    const end = new Date(this.finishStudies);
    this.endDate = end.setDate(end.getDate() + 30);

    var date1 = new Date(startDate);//Remember, months are 0 based in JS
    var date2 = new Date(this.endDate);
    var year1 = date1.getFullYear();
    var year2 = date2.getFullYear();
    var month1 = date1.getMonth();
    var month2 = date2.getMonth();
    if (month1 === 0) { //Have to take into account
      month1++;
      month2++;
    }
    var numberOfMonths;

    numberOfMonths = (year2 - year1) * 12 + (month2 - month1);

    this.visaDuration = numberOfMonths;

    this.totalStudentHealth = numberOfMonths * this.studentHealthPrice;
    console.log(numberOfMonths);
  }

  generateQuote() {
    this.getValuesFromForm();
    console.log(this.selectedSchool);
    /*this.createNewId = this.afs.createId();
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
      weeks: this.weeksNumber,
    }
    this.db.updateAt(`ELICOS-Quotes/${id}`, data);*/
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