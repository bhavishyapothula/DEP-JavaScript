import { initiateExpress } from './server';
import { initDatabse } from './initDatabase';
import { config } from 'dotenv';

// set up env configuration 
config();

const server = initiateExpress();

const port = 8080;

// initialize database with paramaters
initDatabse();

// start the server
server.listen(port, () => {
    console.log(`Server started listening at ${port}`);
});
