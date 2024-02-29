import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirprofileComponent } from './voirprofile.component';

describe('VoirprofileComponent', () => {
  let component: VoirprofileComponent;
  let fixture: ComponentFixture<VoirprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoirprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
