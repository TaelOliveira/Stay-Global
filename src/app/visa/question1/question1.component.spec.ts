import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Question1Component } from './question1.component';

describe('Question1Component', () => {
  let component: Question1Component;
  let fixture: ComponentFixture<Question1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Question1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
