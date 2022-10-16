import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessarticleComponent } from './bussinessarticle.component';

describe('BussinessarticleComponent', () => {
  let component: BussinessarticleComponent;
  let fixture: ComponentFixture<BussinessarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinessarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
