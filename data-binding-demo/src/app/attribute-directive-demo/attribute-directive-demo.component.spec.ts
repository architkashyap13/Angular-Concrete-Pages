import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveDemoComponent } from './attribute-directive-demo.component';

describe('AttributeDirectiveDemoComponent', () => {
  let component: AttributeDirectiveDemoComponent;
  let fixture: ComponentFixture<AttributeDirectiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeDirectiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
