import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAngularAnimationsComponent } from './pro-angular-animations.component';

describe('ProAngularAnimationsComponent', () => {
  let component: ProAngularAnimationsComponent;
  let fixture: ComponentFixture<ProAngularAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProAngularAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProAngularAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
