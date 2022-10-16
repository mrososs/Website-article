import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealtharticleComponent } from './healtharticle.component';

describe('HealtharticleComponent', () => {
  let component: HealtharticleComponent;
  let fixture: ComponentFixture<HealtharticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealtharticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealtharticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
