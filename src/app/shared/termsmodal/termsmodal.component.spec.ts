import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsmodalComponent } from './termsmodal.component';

describe('TermsmodalComponent', () => {
  let component: TermsmodalComponent;
  let fixture: ComponentFixture<TermsmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
