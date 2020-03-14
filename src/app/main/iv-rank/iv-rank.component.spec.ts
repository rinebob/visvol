import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvRankComponent } from './iv-rank.component';

describe('IvRankComponent', () => {
  let component: IvRankComponent;
  let fixture: ComponentFixture<IvRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
