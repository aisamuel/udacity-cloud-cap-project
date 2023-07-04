import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RssfeedListComponent } from './rssfeed-list.component';

describe('RssfeedListComponent', () => {
  let component: RssfeedListComponent;
  let fixture: ComponentFixture<RssfeedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RssfeedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RssfeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
