import { MyDataStructure } from './myDataStructure';
import { MyReverseIterator } from './myReverseIterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

console.log(dataStructure);

const [a, b] = dataStructure;
console.log('roubados: ', a, b);
console.log('varias linhas de codigo abstraidas');
const [c, ...rest] = dataStructure;

console.log('c', c, 'rest: ', rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}

console.log('--------');
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
