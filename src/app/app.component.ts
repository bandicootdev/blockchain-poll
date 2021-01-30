import {Component} from '@angular/core';
import {Poll, PollFrom, PollVoted} from "./types";
import {PollService} from "./services/poll.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  activePoll = null;
  polls = this.ps.getPoll();

  constructor(private ps: PollService) {
  }

  setActivePoll(poll) {
    this.activePoll = null;
    setTimeout(() => {
      this.activePoll = poll;
    }, 100)
  }


  handlePollCreated(poll: PollFrom) {
    this.ps.createPoll(poll)
  }

  handlePollVote(pollVoted: PollVoted) {
    this.ps.vote(pollVoted.id, pollVoted.vote)
  }
}
