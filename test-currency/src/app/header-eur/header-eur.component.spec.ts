import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEurComponent } from './header-eur.component';

describe('HeaderEurComponent', () => {
  let component: HeaderEurComponent;
  let fixture: ComponentFixture<HeaderEurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
