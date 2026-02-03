class Score {
  public score: number;
  public judge: string;
  constructor(judge: string, score: number) {
    this.judge = judge;
    this.score = score;
  }
}

class Ride {
  public surfer: string;
  public scoreArray: Score[] = [];
  constructor(surfer: string) {
    this.surfer = surfer;
  }

  public addScore(score: Score) {
    this.scoreArray.push(score);
  }

  public printAllScores() {
    for (const item of this.scoreArray) {
      console.log(`${item.judge} gave a score of ${item.score}`);
    }
  }

  public printOverallScore() {
    let error: boolean = false;
    let overallScore: number;
    let sum: number = 0;
    for (const item of this.scoreArray) {
      if (item.score < 1 || item.score > 10 || (item.score * 10) % 1 != 0) {
        error = true;
      } else {
        sum += item.score;
      }
    }
    if (this.scoreArray.length < 3) {
      error = true;
    }
    if (!error) {
      sum -= this.scoreArray[0].score;
      overallScore = sum / (this.scoreArray.length - 1);
      console.log(`Overall Score for ${this.surfer}: ${overallScore}`);
    } else {
      console.log(
        `There was an invalid score so the surfer's overall score is invalid.`
      );
    }
  }
}

//Tests
// --- HELPER FOR LOGGING RESULTS ---
const testHeader = (msg: string) => console.log(`\n--- ${msg} ---`);

// 1. Test: Valid Data
testHeader("TEST 1: Valid Scores");
const ride1 = new Ride("Kelly Slater");
ride1.addScore(new Score("Judge 1", 8.5));
ride1.addScore(new Score("Judge 2", 7.0));
ride1.addScore(new Score("Judge 3", 9.0));
// Expected: (7.0 + 9.0) / 2 = 8.0
ride1.printOverallScore();

// 2. Test: Less than 3 scores
testHeader("TEST 2: Not enough judges (Only 2 scores)");
const ride2 = new Ride("Carissa Moore");
ride2.addScore(new Score("Judge 1", 10));
ride2.addScore(new Score("Judge 2", 9.5));
// Expected: "There was an invalid score..." (because length < 3)
ride2.printOverallScore();

// 3. Test: Too many decimal places
testHeader("TEST 3: Invalid decimal (8.55)");
const ride3 = new Ride("Italo Ferreira");
ride3.addScore(new Score("Judge 1", 8.55)); // Two decimals
ride3.addScore(new Score("Judge 2", 7.0));
ride3.addScore(new Score("Judge 3", 9.0));
// Expected: "There was an invalid score..."
ride3.printOverallScore();

// 4. Test: Score out of range (High)
testHeader("TEST 4: Score out of range (11.0)");
const ride4 = new Ride("Stephanie Gilmore");
ride4.addScore(new Score("Judge 1", 11.0)); // Above 10
ride4.addScore(new Score("Judge 2", 5.0));
ride4.addScore(new Score("Judge 3", 5.0));
// Expected: "There was an invalid score..."
ride4.printOverallScore();
