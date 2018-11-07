import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMappingOptionComponent } from './group-mapping-option.component';

describe('GroupMappingOptionComponent', () => {
  let component: GroupMappingOptionComponent;
  let fixture: ComponentFixture<GroupMappingOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMappingOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMappingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
