import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NumRomComponent } from './num-rom.component';
import { FormsModule } from '@angular/forms';



describe('NumRomComponent', () => {
  let component: NumRomComponent;
  let fixture: ComponentFixture<NumRomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NumRomComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumRomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('12 should be equal to roman value XII', () => {

    expect(component.convertToRoman(12)).toBe("XII");
  });

  it('4 should be equal to roman value IV', () => {

    expect(component.convertToRoman(4)).toBe("IV");
  });

  it('4 should not to be equal to roman value X', () => {

    expect(component.convertToRoman(4)).not.toBe("X");
  });

});
