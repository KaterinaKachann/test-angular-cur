import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUsdComponent } from './header-usd.component';

describe('HeaderUsdComponent', () => {
  let component: HeaderUsdComponent;
  let fixture: ComponentFixture<HeaderUsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUsdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
