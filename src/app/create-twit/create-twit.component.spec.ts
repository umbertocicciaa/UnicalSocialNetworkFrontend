import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTwitComponent } from './create-twit.component';

describe('CreateTwitComponent', () => {
  let component: CreateTwitComponent;
  let fixture: ComponentFixture<CreateTwitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTwitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
