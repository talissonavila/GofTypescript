import { DatabaseFuction } from './db/databaseFunction';

const databaseFunction1 = DatabaseFuction;
databaseFunction1.add({ name: 'julio from function', age: 52 });
databaseFunction1.add({ name: 'pedro from function', age: 5 });
databaseFunction1.add({ name: 'maria from function', age: 2 });

export { databaseFunction1 };
