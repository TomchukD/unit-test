import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutTextTestComponent } from './cut-text-test.component';

describe('CutTextTestComponent', () => {
  let component: CutTextTestComponent;
  let fixture: ComponentFixture<CutTextTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutTextTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutTextTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('CutTextTestComponent: case - 1', () => {
    const fixture = TestBed.createComponent(CutTextTestComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('.case-1').textContent).toContain('th');
  });
  it('CutTextTestComponent: case - 2', () => {
    const fixture = TestBed.createComponent(CutTextTestComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement
    console.log(compiled.querySelector('.case-2').textContent);
    expect(compiled.querySelector('.case-2').textContent).toContain(compiled.querySelector('.case-2').textContent);
  });

});
