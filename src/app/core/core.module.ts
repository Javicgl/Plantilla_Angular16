import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderFirstComponent } from './components/header-first/header-first.component';
import { HeaderSecondComponent } from './components/header-second/header-second.component';
import { SubheaderComponent } from './components/subheader/subheader.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderFirstComponent,
    HeaderSecondComponent,
    SubheaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
