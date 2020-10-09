/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PemetaanComponent } from './pemetaan.component';

describe('PemetaanComponent', () => {
  let component: PemetaanComponent;
  let fixture: ComponentFixture<PemetaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemetaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemetaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
