import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobsServicesComponent } from './bobs-services.component';

describe('BobsServicesComponent', () => {
  let component: BobsServicesComponent;
  let fixture: ComponentFixture<BobsServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobsServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
