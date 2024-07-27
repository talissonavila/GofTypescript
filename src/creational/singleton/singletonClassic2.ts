import { DatabaseClassic } from './db/databaseClassic';
import { databaseClassic1 } from './singletonClassic1';

const databaseClassic2 = DatabaseClassic.instance;
databaseClassic2.add({ name: 'jose from classic', age: 52 });
databaseClassic2.add({ name: 'caique from classic', age: 5 });
databaseClassic2.add({ name: 'marta from classic', age: 2 });

databaseClassic2.show();

console.log(
  `is databaseClassic1 equals to databaseClassic2? ${databaseClassic1 === databaseClassic2}`,
);
