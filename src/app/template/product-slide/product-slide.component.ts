import { Component, OnInit } from '@angular/core';
import { loadSlide } from 'src/utils/helper';

@Component({
  selector: 'app-product-slide',
  templateUrl: './product-slide.component.html',
  styleUrls: ['./product-slide.component.scss']
})
export class ProductSlideComponent implements OnInit {
  public ngOnInit(): void {
    setTimeout (() => loadSlide(),500);
  }

}
