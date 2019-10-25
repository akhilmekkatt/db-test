import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumRomComponent } from './num-rom.component';

describe('NumRomComponent', () => {
  let component: NumRomComponent;
  let fixture: ComponentFixture<NumRomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumRomComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumRomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should convert numeric to roman', () => {

    expect(component.convertToRoman(12)).toBe("XII");
  });
});
