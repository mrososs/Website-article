import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralarticleComponent } from './generalarticle.component';

describe('GeneralarticleComponent', () => {
  let component: GeneralarticleComponent;
  let fixture: ComponentFixture<GeneralarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
