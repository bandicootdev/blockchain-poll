export interface Poll extends PollFrom {
  id: number,
  results: number[];
  voted: boolean;
}

export interface PollFrom {
  question: string;
  options: string[];
  thumbnail: string;
}

export interface PollVoted {
  id: number,
  vote: number;
}

export interface Voter {
  id: string;
  voted: number[];

}
