import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentQuotePage } from './student-quote.page';

describe('StudentQuotePage', () => {
  let component: StudentQuotePage;
  let fixture: ComponentFixture<StudentQuotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentQuotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentQuotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
