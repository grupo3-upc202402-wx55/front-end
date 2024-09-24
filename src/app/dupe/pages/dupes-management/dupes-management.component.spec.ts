import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DupesManagementComponent } from './dupes-management.component';

describe('DupesManagementComponent', () => {
  let component: DupesManagementComponent;
  let fixture: ComponentFixture<DupesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DupesManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DupesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
