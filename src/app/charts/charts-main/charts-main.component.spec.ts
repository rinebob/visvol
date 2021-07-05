import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsMainComponent } from './charts-main.component';

describe('ChartsMainComponent', () => {
  let component: ChartsMainComponent;
  let fixture: ComponentFixture<ChartsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
