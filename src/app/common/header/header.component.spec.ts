import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    const routeFake = { navigate: () => { } };
    const fakeActivatedRoute = { snapshot: { data: { ...{} } } } as ActivatedRoute;
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterModule
      ],
      providers: [
        { provide: Router, useValue: routeFake },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        LocationStrategy
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
