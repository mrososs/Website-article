import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsarticleComponent } from './sportsarticle.component';

describe('SportsarticleComponent', () => {
  let component: SportsarticleComponent;
  let fixture: ComponentFixture<SportsarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
