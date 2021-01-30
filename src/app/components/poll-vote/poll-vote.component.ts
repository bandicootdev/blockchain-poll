import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// @ts-ignore
import ApexCharts from 'apexcharts';
import {PollVoted} from "../../types";

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.css']
})
export class PollVoteComponent implements AfterViewInit {
  @Input() voted: boolean;
  @Input() options: string[];
  @Input() results: number[];
  @Input() question: string;
  @Input() id: number;
  @Output() pollVoted: EventEmitter<PollVoted> = new EventEmitter()
  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required])
    })
  }

  ngAfterViewInit() {
    if (this.voted) this.generateChart();
  }

  submitForm() {
    const pollVoted: PollVoted = {
      id: this.id,
      vote: this.voteForm.get('selected').value
    }
    this.pollVoted.emit(pollVoted);
  }

  generateChart() {

    const options = {
      series: [{
        data: this.results
      },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true
        },
      },
      xaxis: {
        categories: this.options,
      },
      legend: {
        show: false
      },
    };

    const chart = new ApexCharts(document.getElementById("poll-results"), options);
    chart.render();

  }
}
