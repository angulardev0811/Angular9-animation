import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacymodalComponent } from './privacymodal.component';

describe('PrivacymodalComponent', () => {
  let component: PrivacymodalComponent;
  let fixture: ComponentFixture<PrivacymodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacymodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
