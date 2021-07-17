interface Reportable {
  summary(): void;
}

const civic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): void {
    console.log(
      `Name : ${this.name}, Year - ${this.year}, Broken : ${
        this.broken ? 'Yes' : 'No'
      }`
    );
  },
};

const drinkDetails = {
  name: 'pepsi',
  carbonated: true,
  sugar: 40,
  summary(): void {
    console.log(
      `Name - ${this.name}, Carbonated - ${this.carbonated} Sugar - ${this.sugar}`
    );
  },
};

const printSummary = (item: Reportable): void => {
  item.summary();
};

printSummary(civic);
printSummary(drinkDetails);
