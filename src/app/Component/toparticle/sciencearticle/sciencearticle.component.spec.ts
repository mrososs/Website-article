import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencearticleComponent } from './sciencearticle.component';

describe('SciencearticleComponent', () => {
  let component: SciencearticleComponent;
  let fixture: ComponentFixture<SciencearticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciencearticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SciencearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
