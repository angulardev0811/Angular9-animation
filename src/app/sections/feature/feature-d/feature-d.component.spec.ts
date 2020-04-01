import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDComponent } from './feature-d.component';

describe('FeatureDComponent', () => {
  let component: FeatureDComponent;
  let fixture: ComponentFixture<FeatureDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
