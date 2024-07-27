import { DatabaseFuction } from './db/databaseFunction';
import { databaseFunction1 } from './singletonFuction1';

const databaseFunction2 = DatabaseFuction;
databaseFunction2.add({ name: 'jose from function', age: 52 });
databaseFunction2.add({ name: 'caique from function', age: 5 });
databaseFunction2.add({ name: 'marta from function', age: 2 });

databaseFunction2.show();

console.log(
  `is databaseFunction1 equals to databaseFunction2? ${databaseFunction2 === databaseFunction1}`,
);
