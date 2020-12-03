// root.ts
// root classes of the institution

class Person {
  id: number;
  name: string;

  constructor(name: string) {
    this.id = Math.floor(Math.random()*100);
    this.name = name;
  }

  greet(): string {
    return "Hello, I'm " + this.name;
  }

}

export { Person }