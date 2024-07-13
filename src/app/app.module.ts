import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CategoryCreateComponent } from './Components/Category/category-create/category-create.component';
import { CategoryEditComponent } from './Components/Category/category-edit/category-edit.component';
import { CategoryIndexComponent } from './Components/Category/category-index/category-index.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
