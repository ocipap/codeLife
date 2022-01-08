function classDecorator() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = 'new Property';
      hello = 'override';
    };
  };
}

@classDecorator()
class Test {
  property = 'property';
  hello: string;

  constructor(m: string) {
    this.hello = m;
  }
}

const t = new Test('sdsd');
console.log(t);

export default Test;
