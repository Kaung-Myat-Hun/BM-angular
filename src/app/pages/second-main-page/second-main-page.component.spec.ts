import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMainPageComponent } from './second-main-page.component';

describe('SecondMainPageComponent', () => {
  let component: SecondMainPageComponent;
  let fixture: ComponentFixture<SecondMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
