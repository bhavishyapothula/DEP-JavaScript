
import * as request from 'supertest';
import { initiateExpress } from '../../src/home-task-03-04-05/server';
import { generateToken } from '../../src/home-task-03-04-05/services/jwt.service';
import { setupDBForTests, seedData } from '../db/setup-db';
import { config } from 'dotenv';
import { uuid } from 'uuidv4';
import { UserModel } from '../../src/home-task-03-04-05/models/user.model';

let jwtToken: string;
let server;
let initialData;

beforeEach(async () => {
    config();
    server = initiateExpress();
    initialData = seedData;
    jwtToken = generateToken(initialData.user.id);    
    await setupDBForTests(initialData);    
}, 20000);


test("Should create user", async () => {
    const userToBeCreated = {
        login: 'User3', password: 'Password3', age: 30
    };
    const res = await request(server)
        .post('/users')
        .set({ authorization: `Bearer ${jwtToken}` })
        .send(userToBeCreated);

    expect(res.status).toBe(200);
}, 20000);

test("Should not create user", async () => {

    // try creating duplicate user
    const res1 = await request(server)
        .post('/users')
        .set({ authorization: `Bearer ${jwtToken}` })
        .send({ login: 'User1', password: 'Password3', age: 30 });
    expect(res1.status).toBe(400);

    // try creating user without login
    const res2 = await request(server)
        .post('/users')
        .set({ authorization: `Bearer ${jwtToken}` })
        .send({ password: 'Password3', age: 30 });
    expect(res2.status).toBe(400);

    // try creating user with invalid password structure
    const res3 = await request(server)
        .post('/users')
        .set({ authorization: `Bearer ${jwtToken}` })
        .send({ login: 'Some new user', password: 'Password 3', age: 30 });
    expect(res3.status).toBe(400);

}, 20000);

test("Should return list of users", async () => {
    const res = await request(server)
        .get('/users')
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
}, 20000);

test("Should return user based on id", async () => {
    const res = await request(server)
        .get(`/users/${initialData.user.id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(200);
    expect(res.body.login).toBe(initialData.user.login);
}, 20000);


test("Should not return user for invalid id", async () => {
    const res = await request(server)
        .get(`/users/${uuid()}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(400);
}, 20000);

test("Should update user", async () => {
    const res = await request(server)
        .put(`/users/${initialData.user.id}`)
        .set({ authorization: `Bearer ${jwtToken}` })
        .send({ password: 'PasswordUpdated1' });

    expect(res.status).toBe(200);
    expect(res.body.password).toBe('PasswordUpdated1');
}, 20000);


test("Should not update user", async () => {

    // try creating user with invalid password structure
    const res3 = await request(server)
        .put(`/users/${initialData.user.id}`)
        .set({ authorization: `Bearer ${jwtToken}` })
        .send({ password: 'Password 3' });
    expect(res3.status).toBe(400);
}, 20000);

test("Should delete user", async () => {

    const beforeDelete = await request(server)
        .get(`/users/${initialData.user.id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    // try creating user with invalid password structure
    const res = await request(server)
        .delete(`/users/${initialData.user.id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    const afterDelete = await request(server)
        .get(`/users/${initialData.user.id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(beforeDelete.body.isDeleted).toBeFalsy();
    expect(res.status).toBe(200);
    expect(afterDelete.body).toBeTruthy();
}, 20000);

test("Should not delete user", async () => {

    // try deleting non exsiting user
    const resDeleteNonExistingUser = await request(server)
        .delete(`/users/${uuid()}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(resDeleteNonExistingUser.status).toBe(400);

    // try deleting already deleted user (delete the user twice)
    await request(server)
        .delete(`/users/${initialData.user.id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    const resAlreadyDeletedUser = await request(server)
        .delete(`/users/${initialData.user.id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(resAlreadyDeletedUser.status).toBe(400);
}, 20000);


test("Should return search results", async () => {
    // feed data
    const users = [10, 11, 12].map(number => ({ id: uuid(), login: `User${number}`, password: `Password${number}`, age: 20 + number }));
    await UserModel.bulkCreate(
        users
    );

    // search users with login matching 'user1'
    const res = await request(server)
        .post('/users/search')
        .set({ authorization: `Bearer ${jwtToken}` })
        .send({ key: 'user', limit: 2 });

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(2);

}, 20000);




