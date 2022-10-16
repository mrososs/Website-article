import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntarticleComponent } from './entarticle.component';

describe('EntarticleComponent', () => {
  let component: EntarticleComponent;
  let fixture: ComponentFixture<EntarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
