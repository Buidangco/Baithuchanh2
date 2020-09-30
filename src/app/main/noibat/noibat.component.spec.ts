import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoibatComponent } from './noibat.component';

describe('NoibatComponent', () => {
  let component: NoibatComponent;
  let fixture: ComponentFixture<NoibatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoibatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoibatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
