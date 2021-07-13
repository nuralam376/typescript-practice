const profile = {
  name: 'Abc',
  age: 20,
  coords: {
    lat: 2.5,
    lng: 3.5,
  },
  setAge(age: number) {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
