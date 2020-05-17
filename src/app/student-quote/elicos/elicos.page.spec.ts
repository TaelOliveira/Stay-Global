import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElicosPage } from './elicos.page';

describe('ElicosPage', () => {
  let component: ElicosPage;
  let fixture: ComponentFixture<ElicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
