class Player {
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
}

export default Player;
