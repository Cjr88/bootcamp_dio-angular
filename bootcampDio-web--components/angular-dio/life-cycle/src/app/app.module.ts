import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';
import { CardComponent } from './card/card.component';
import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CheckSampleComponent,
    CardComponent,
    CompAtributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
