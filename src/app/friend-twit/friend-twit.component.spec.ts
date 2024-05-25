import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendTwitComponent } from './friend-twit.component';

describe('FriendTwitComponent', () => {
  let component: FriendTwitComponent;
  let fixture: ComponentFixture<FriendTwitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendTwitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendTwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
