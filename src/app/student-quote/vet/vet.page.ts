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
  coursePrice;
  courseTerms;

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
    website: "https://pacifictraining.edu.au/",
    email: "sydney@pacifictraining.edu.au",
    address: "Ground Floor, 208 Clarence Street, Sydney, NSW 2000, +61 (2) 9265 7080",
    tuition_fee: 0,
    enrolment_fee: 200,
    material_fee: 0,
    startDate: "Jan, Apr, Jul, Sep",
    courses: [
      { name: 'Certificado III in Hospitality', terms: 3, duration: 9, price: 1600, timetable: "Mon-Sat: 8:30am-4:00pm / Mon-Thu: 5:00pm-8:45pm" },
      { name: 'Diploma of Hospitality Management', terms: 6, duration: 18, price: 1600, timetable: "Mon-Sat: 8:30am-4:00pm / Mon-Thu: 5:00pm-8:45pm" },
      { name: 'Certificado IV in Leadership and Management', terms: 4, duration: 12, price: 1500, timetable: "Fri-Sat: 8:30am-4:00pm / Mon-Thu: 5:00pm-8:45pm" },
      { name: 'Diploma of Social Media Marketing', terms: 4, duration: 12, price: 1500, timetable: "Mon-Tue: 8:30am-4:00pm" },
      { name: 'Advanced Diploma of Marketing and Communication', terms: 7, duration: 21, price: 1500, timetable: "Mon-Tue: 8:30am-4:00pm" },
      { name: 'Certificate III in Events', terms: 3, duration: 9, price: 1500, timetable: "Wed-Sat: 8:30am-4:00pm" },
      { name: 'Diploma of Events Management', terms: 5, duration: 15, price: 1500, timetable: "Mon-Sat: 8:30am-4:00pm / Mon-Thu: 5:00pm-8:45pm" },
    ],
  }

  ACBI = {
    name: "ACBI",
    website: "https://www.acbi.edu.au/",
    email: "admissions@acbi.edu.au",
    address: "Suite 510, 451 Pitt Street Haymarket Sydney, NSW 2000, +61 (2) 9071 9803",
    tuition_fee: 0,
    enrolment_fee: 100,
    material_fee: 150,
    startDate: "Jan, Feb, Apr, May, Jul, Aug, Oct, Nov",
    courses: [
      { name: 'Certificado IV in Marketing & Communication', terms: 2, duration: 7, price: 1200, timetable: "Mon-Tue: 8:30am-4:15pm" },
      { name: 'Diploma of Graphic Design', terms: 6, duration: 18, price: 1500, timetable: "Mon-Tue: 8:30am-4:15pm / Wed - Thu: 8:30am-4:15pm" },
      { name: 'Diploma of Project Management', terms: 4, duration: 12, price: 1200, timetable: "Wed: 4:30pm-9:15pm / Saturday: 9:00am - 5pm" },
      { name: 'Diploma of International Business', terms: 4, duration: 12, price: 1200, timetable: "Mon-Tue: 8:30am-4:15pm" },
      { name: 'Diploma of Digital Media Technologies', terms: 6, duration: 18, price: 1200, timetable: "Mon-Tue: 8:30am-4:15pm / Tue-Wed-Thu: 4:30pm-9:15pm" },
      { name: 'Advanced Diploma of Network Security', terms: 8, duration: 24, price: 1450, timetable: "Mon-Tue-Wed: 4:30pm-9:15pm" },
      { name: 'Diploma of Enterprise Resource Planning', terms: 4, duration: 12, price: 1200, timetable: "Mon-Wed: 4:30pm-9:15pm" },
    ],
  }

  International_House = {
    name: "International House",
    website: "https://ihsydney.com.au/",
    email: "enrol@ihsydney.com.au",
    address: "Sydney City: Level 1, 203 Clarence Street, Sydney, NSW 2000, +61 (2) 9279 0733",
    tuition_fee: 0,
    enrolment_fee: 200,
    material_fee: 0,
    startDate: "Jan, Mar, Jul, Sep, Nov",
    courses: [
      { name: 'Certificate III in Business', terms: 3, duration: 6, price: 1100, timetable: "Mon-Fri: 8:00am-6:00pm" },
      { name: 'Certificate IV in Marketing and Communication', terms: 6, duration: 12, price: 1000, timetable: "Mon-Fri: 8:00am-6:00pm" },
      { name: 'Diploma of International Business', terms: 6, duration: 12, price: 1000, timetable: "Mon-Fri: 8:00am-6:00pm" },
      { name: 'Diploma of Social Media Marketing', terms: 6, duration: 12, price: 1200, timetable: "Mon-Fri: 8:00am-6:00pm" },
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
    this.coursePrice = course.price;
    this.courseTerms = course.terms;
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
    this.endDate = expireVisa.setMonth(expireVisa.getMonth() + 1 + this.duration);

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