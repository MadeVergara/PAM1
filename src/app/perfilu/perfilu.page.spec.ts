import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfiluPage } from './perfilu.page';

describe('PerfiluPage', () => {
  let component: PerfiluPage;
  let fixture: ComponentFixture<PerfiluPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfiluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
