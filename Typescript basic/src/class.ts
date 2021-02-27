class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

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
console.log(abc.name);
