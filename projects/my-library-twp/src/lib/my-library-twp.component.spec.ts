import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibraryTwpComponent } from './my-library-twp.component';

describe('MyLibraryTwpComponent', () => {
  let component: MyLibraryTwpComponent;
  let fixture: ComponentFixture<MyLibraryTwpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibraryTwpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibraryTwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
