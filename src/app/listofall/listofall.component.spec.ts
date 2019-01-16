import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofallComponent } from './listofall.component';

describe('ListofallComponent', () => {
  let component: ListofallComponent;
  let fixture: ComponentFixture<ListofallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
