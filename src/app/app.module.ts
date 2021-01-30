import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PollCreateComponent} from './components/poll-create/poll-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PollComponent } from './components/poll/poll.component';
import { PollVoteComponent } from './components/poll-vote/poll-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    PollCreateComponent,
    PollComponent,
    PollVoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
