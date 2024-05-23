import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDetailsComponent } from './todos-details.component';

describe('TodosDetailsComponent', () => {
  let component: TodosDetailsComponent;
  let fixture: ComponentFixture<TodosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
