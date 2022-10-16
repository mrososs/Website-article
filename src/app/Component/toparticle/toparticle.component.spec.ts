import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToparticleComponent } from './toparticle.component';

describe('ToparticleComponent', () => {
  let component: ToparticleComponent;
  let fixture: ComponentFixture<ToparticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToparticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToparticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
