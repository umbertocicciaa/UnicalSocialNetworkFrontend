import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExplorePostComponent } from "./explore-post.component";

describe("ExploreComponent", () => {
  let component: ExplorePostComponent;
  let fixture: ComponentFixture<ExplorePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorePostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExplorePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
