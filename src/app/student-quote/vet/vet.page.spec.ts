import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VetPage } from './vet.page';

describe('VetPage', () => {
  let component: VetPage;
  let fixture: ComponentFixture<VetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
