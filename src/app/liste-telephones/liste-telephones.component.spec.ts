import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTelephonesComponent } from './liste-telephones.component';

describe('ListeTelephonesComponent', () => {
  let component: ListeTelephonesComponent;
  let fixture: ComponentFixture<ListeTelephonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTelephonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTelephonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
