import { DatabaseModule } from './db/databaseModule';
import { databaseModule1 } from './singletonModule1';

const databaseModule2 = DatabaseModule;
databaseModule2.add({ name: 'jose from module', age: 52 });
databaseModule2.add({ name: 'caique from module', age: 5 });
databaseModule2.add({ name: 'marta from module', age: 2 });

databaseModule2.show();

console.log(
  `is databaseModule1 equals to databaseModule2? ${databaseModule2 === databaseModule1}`,
);
