import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprofileComponent } from './listeprofile.component';

describe('ListeprofileComponent', () => {
  let component: ListeprofileComponent;
  let fixture: ComponentFixture<ListeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
