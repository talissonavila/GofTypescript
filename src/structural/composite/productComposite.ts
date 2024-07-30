export abstract class ProductComponent {
  abstract getPrice(): number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const index = this.children.indexOf(product);
    if (index !== -1) this.children.splice(index, 1);
  }
  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

const shirt = new ProductLeaf('Shirt', 39.99);
const pen = new ProductLeaf('blue pen', 2);
const iphone = new ProductLeaf('Iphone X', 199);

const productBox = new ProductComposite();
productBox.add(shirt, pen, iphone);

const tablet = new ProductLeaf('Tab 2', 99);
const kindle = new ProductLeaf('Kindle', 50);

const anotherBox = new ProductComposite();
anotherBox.add(tablet, kindle);

productBox.add(anotherBox);
console.log(productBox);
console.log(productBox.getPrice());
