import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsRecipesCardComponent } from './descriptions-recipes-card.component';

describe('DescriptionsRecipesCardComponent', () => {
  let component: DescriptionsRecipesCardComponent;
  let fixture: ComponentFixture<DescriptionsRecipesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionsRecipesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsRecipesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
