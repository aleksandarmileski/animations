import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaticalAnimationsComponent } from './programatical-animations.component';

describe('ProgramaticalAnimationsComponent', () => {
  let component: ProgramaticalAnimationsComponent;
  let fixture: ComponentFixture<ProgramaticalAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaticalAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaticalAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
