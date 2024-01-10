import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindergardensComponent } from './kindergardens.component';

describe('KindergardensComponent', () => {
  let component: KindergardensComponent;
  let fixture: ComponentFixture<KindergardensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KindergardensComponent]
    });
    fixture = TestBed.createComponent(KindergardensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
