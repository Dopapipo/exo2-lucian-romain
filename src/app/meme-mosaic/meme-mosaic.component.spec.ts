import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeMosaicComponent } from './meme-mosaic.component';

describe('MemeMosaicComponent', () => {
  let component: MemeMosaicComponent;
  let fixture: ComponentFixture<MemeMosaicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeMosaicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeMosaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
