import { DatabaseClassic } from './db/databaseClassic';

const databaseClassic1 = DatabaseClassic.instance;
databaseClassic1.add({ name: 'julio from classic', age: 52 });
databaseClassic1.add({ name: 'pedro from classic', age: 5 });
databaseClassic1.add({ name: 'maria from classic', age: 2 });

export { databaseClassic1 };
