class Player {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  play() {
    console.log(
      `${this.name} from ${this.country} is ${this.age} years old and is playing`
    );
  }
}

const abc = new Player("Abc", 40, "Bd");
const def = new Player("Def", 25, "Eng");

const players: Player[] = [];

players.push(abc);
players.push(def);

abc.play();
abc.name = "as";
// abc.age = 45;
// abc.country = "India";
console.log(abc.name);
// console.log(abc.age);
console.log(abc.country);
