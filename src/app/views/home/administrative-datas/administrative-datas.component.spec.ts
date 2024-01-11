import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeDatasComponent } from './administrative-datas.component';

describe('AdministrativeDatasComponent', () => {
  let component: AdministrativeDatasComponent;
  let fixture: ComponentFixture<AdministrativeDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeDatasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrativeDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
