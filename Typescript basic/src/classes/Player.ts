import { isPlayer } from "../interfaces/isPlayer";

class Player implements isPlayer {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  play() {
    console.log(
      `${this.name} from ${this.country} is ${this.age} is years old`
    );
  }

  getProperty() {
    return this.age;
  }
}

export default Player;
