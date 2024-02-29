import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemsgComponent } from './listemsg.component';

describe('ListemsgComponent', () => {
  let component: ListemsgComponent;
  let fixture: ComponentFixture<ListemsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListemsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListemsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
