
import * as request from 'supertest';
import { initiateExpress } from '../../src/home-task-03-04-05/server';
import { generateToken } from '../../src/home-task-03-04-05/services/jwt.service';
import { setupDBForTests, seedData } from '../db/setup-db';
import { config } from 'dotenv';

let jwtToken: string;
let server;
let initialData;

beforeEach(async () => {
    config();
    server = initiateExpress();
    initialData = seedData;
    jwtToken = generateToken(initialData.user.login);
    await setupDBForTests(initialData);
}, 20000);


test("Should return JWT token", async () => {
    const res = await request(server)
        .post('/auth/login')
        .send({ login: 'User1', password: 'Password1' });

    expect(res.status).toBe(200);
    expect(res.text).toBe(jwtToken);
}, 20000);

test("Should not return JWT token for non existing user", async () => {
    const res = await request(server)
        .post('/auth/login')
        .send({ login: 'User10', password: 'Password1' });

    expect(res.status).toBe(401);
}, 20000);

test("Should not return JWT token for wrong password", async () => {
    const res = await request(server)
        .post('/auth/login')
        .send({ login: 'User1', password: 'Password10' });

    expect(res.status).toBe(403);
}, 20000);
