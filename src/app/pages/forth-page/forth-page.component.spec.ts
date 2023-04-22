import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthPageComponent } from './forth-page.component';

describe('ForthPageComponent', () => {
  let component: ForthPageComponent;
  let fixture: ComponentFixture<ForthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
