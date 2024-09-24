import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDupeComponent } from './card-dupe.component';

describe('CardDupeComponent', () => {
  let component: CardDupeComponent;
  let fixture: ComponentFixture<CardDupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
