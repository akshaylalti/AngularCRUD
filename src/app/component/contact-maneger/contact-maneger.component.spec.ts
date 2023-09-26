import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManegerComponent } from './contact-maneger.component';

describe('ContactManegerComponent', () => {
  let component: ContactManegerComponent;
  let fixture: ComponentFixture<ContactManegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactManegerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
