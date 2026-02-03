class Round {
  public team1: number[];
  public team2: number[];
  constructor(team1: number[], team2: number[]) {
    this.team1 = team1;
    this.team2 = team2;
  }

  public scoreTeam1(): number {
    const sum: number = this.team1.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return sum;
  }
  public scoreTeam2(): number {
    const sum: number = this.team2.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return sum;
  }
}

class Game {
  public team1Score: number = 0;
  public team2Score: number = 0;
  public rounds: Round[] = [];

  public addRound(round: Round) {
    this.rounds.push(round);
    if (round.scoreTeam1() > round.scoreTeam2()) {
      this.team1Score =
        this.team1Score + round.scoreTeam1() - round.scoreTeam2();
    } else if (round.scoreTeam2() > round.scoreTeam1()) {
      this.team2Score =
        this.team2Score + round.scoreTeam2() - round.scoreTeam1();
    }
  }

  public totalScoreTeam1(): number {
    return this.team1Score;
  }

  public totalScoreTeam2(): number {
    return this.team2Score;
  }

  public getWinner(): string {
    if (this.team1Score > this.team2Score && this.team1Score >= 21) {
      return `Team 1`;
    } else if (this.team2Score > this.team1Score && this.team2Score >= 21) {
      return `Team 2`;
    } else {
      return `No Winner`;
    }
  }
}

const round1 = new Round([3, 3, 1, 1], [0, 0, 1, 1]);
console.log(round1.scoreTeam1()); // prints '6'.
console.log(round1.scoreTeam2()); // prints '0'
const round2 = new Round([1, 1, 1, 1], [1, 1, 1, 0]);
console.log(round2.scoreTeam1()); // prints '1'
console.log(round2.scoreTeam2()); // prints '0'
const game = new Game();
game.addRound(round1);
game.addRound(round2);
game.addRound(new Round([3, 3, 3, 3], [0, 0, 0, 0]));
game.addRound(new Round([3, 3, 1, 1], [1, 1, 0, 0]));
console.log(game.totalScoreTeam1()); // prints 25
console.log(game.totalScoreTeam2()); // prints 0
console.log(game.getWinner()); // prints 'Team 1'
