import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTwitComponent } from './explore-twit.component';

describe('ExploreTwitComponent', () => {
  let component: ExploreTwitComponent;
  let fixture: ComponentFixture<ExploreTwitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreTwitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreTwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
