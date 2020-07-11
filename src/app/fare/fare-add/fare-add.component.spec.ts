import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FareAddComponent } from './fare-add.component';

describe('FareAddComponent', () => {
  let component: FareAddComponent;
  let fixture: ComponentFixture<FareAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FareAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
