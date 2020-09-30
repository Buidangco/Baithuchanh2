import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoinhatComponent } from './moinhat.component';

describe('MoinhatComponent', () => {
  let component: MoinhatComponent;
  let fixture: ComponentFixture<MoinhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoinhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoinhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
