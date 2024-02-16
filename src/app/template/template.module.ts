import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductSlideComponent } from './product-slide/product-slide.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCategoryComponent,
    ProductSlideComponent,
    BannerComponent,
    FooterComponent,
    CallToActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TemplateModule { }
