import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeHijoComponent } from './mensaje-hijo.component';

describe('MensajeHijoComponent', () => {
  let component: MensajeHijoComponent;
  let fixture: ComponentFixture<MensajeHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
