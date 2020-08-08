import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

const port = 3333;

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(port);

console.log(
  '\n\u001b[32;1m' +
    '\n ---------------------------------------\n' +
    ' *  🚀️       Server started!       🚀️  *' +
    '\n ---------------------------------------\n' +
    ' *\u001b[35;1m        http://localhost:3333        \u001b[32;1m*' +
    '\n ---------------------------------------\n' +
    '\n\u001b[0m',
);
