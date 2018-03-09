import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { JournalService } from './services/journal.service'

import { AppComponent } from './app.component';
import { EntrylistComponent } from './entrylist/entrylist.component';
import { SingleentryComponent } from './singleentry/singleentry.component';

const routes = [
  { path: 'journal' , component: EntrylistComponent},
  { path: 'journal/:id', component: SingleentryComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    EntrylistComponent,
    SingleentryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }