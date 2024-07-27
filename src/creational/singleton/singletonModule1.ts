import { DatabaseModule } from './db/databaseModule';

const databaseModule1 = DatabaseModule;
databaseModule1.add({ name: 'julio from module', age: 52 });
databaseModule1.add({ name: 'pedro from module', age: 5 });
databaseModule1.add({ name: 'maria from module', age: 2 });

export { databaseModule1 };
