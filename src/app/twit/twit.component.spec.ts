import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitComponent } from './twit.component';

describe('TwitComponent', () => {
  let component: TwitComponent;
  let fixture: ComponentFixture<TwitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
