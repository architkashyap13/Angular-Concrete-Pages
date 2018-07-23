import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropertyBindingComponent } from './custom-property-binding.component';

describe('CustomPropertyBindingComponent', () => {
  let component: CustomPropertyBindingComponent;
  let fixture: ComponentFixture<CustomPropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
