import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecountryviewComponent } from './singlecountryview.component';

describe('SinglecountryviewComponent', () => {
  let component: SinglecountryviewComponent;
  let fixture: ComponentFixture<SinglecountryviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecountryviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecountryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
