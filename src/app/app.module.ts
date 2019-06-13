import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { RandomMemeComponent } from './random-meme/random-meme.component';
import { FindQuoteComponent } from './find-quote/find-quote.component';
import { TaggedPeopleComponent } from './tagged-people/tagged-people.component';
import { SelectedTagComponent } from './selected-tag/selected-tag.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent,
    RandomMemeComponent,
    FindQuoteComponent,
    TaggedPeopleComponent,
    SelectedTagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
