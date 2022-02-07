import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFetchTableComponent } from './json-fetch-table.component';

describe('JsonFetchTableComponent', () => {
  let component: JsonFetchTableComponent;
  let fixture: ComponentFixture<JsonFetchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFetchTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonFetchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
