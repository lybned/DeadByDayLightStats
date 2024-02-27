import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerkListComponent } from './perk-list.component';

describe('PerkListComponent', () => {
  let component: PerkListComponent;
  let fixture: ComponentFixture<PerkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerkListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
