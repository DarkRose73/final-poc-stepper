import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepxComponent } from './stepx.component';

describe('StepxComponent', () => {
  let component: StepxComponent;
  let fixture: ComponentFixture<StepxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
