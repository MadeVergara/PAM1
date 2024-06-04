import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciPage } from './ejerci.page';

describe('EjerciPage', () => {
  let component: EjerciPage;
  let fixture: ComponentFixture<EjerciPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
