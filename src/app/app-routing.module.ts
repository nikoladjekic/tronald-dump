import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomMemeComponent } from './random-meme/random-meme.component';
import { FindQuoteComponent } from './find-quote/find-quote.component';
import { TaggedPeopleComponent } from './tagged-people/tagged-people.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectedTagComponent } from './selected-tag/selected-tag.component';

const routes: Routes = [
  { path: 'random-quote', component: RandomQuoteComponent },
  { path: 'random-meme', component: RandomMemeComponent },
  { path: 'find-quote', component: FindQuoteComponent },
  { path: 'tagged-people', component: TaggedPeopleComponent },
  { path: 'selected-tag', component: SelectedTagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule]
})

export class AppRoutingModule { }