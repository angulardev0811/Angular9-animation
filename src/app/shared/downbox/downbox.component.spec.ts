import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownboxComponent } from './downbox.component';

describe('DownboxComponent', () => {
  let component: DownboxComponent;
  let fixture: ComponentFixture<DownboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
