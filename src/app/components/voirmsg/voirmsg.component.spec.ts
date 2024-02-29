import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirmsgComponent } from './voirmsg.component';

describe('VoirmsgComponent', () => {
  let component: VoirmsgComponent;
  let fixture: ComponentFixture<VoirmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirmsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoirmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
