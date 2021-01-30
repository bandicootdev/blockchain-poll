import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PollFrom} from "../../types";

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {

  pollFrom: FormGroup;

  @Output() pollCreated: EventEmitter<PollFrom> = new EventEmitter()

  constructor(private fb: FormBuilder) {
    this.pollFrom = this.fb.group({
      question: this.fb.control('', [Validators.required]),
      image: this.fb.control('',),
      opt1: this.fb.control('',),
      opt2: this.fb.control('',),
      opt3: this.fb.control('',),

    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    const formData: PollFrom = {
      question: this.pollFrom.get('question').value,
      thumbnail: this.pollFrom.get('image').value,
      options: [
        this.pollFrom.get('opt1').value,
        this.pollFrom.get('opt2').value,
        this.pollFrom.get('opt3').value
      ]
    }
    this.pollCreated.emit(formData);
  }

}
