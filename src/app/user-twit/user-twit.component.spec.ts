import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTwitComponent } from './user-twit.component';

describe('UserTwitComponent', () => {
  let component: UserTwitComponent;
  let fixture: ComponentFixture<UserTwitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTwitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
