
import * as request from 'supertest';
import { initiateExpress } from '../../src/home-task-03-04-05/server';
import { generateToken } from '../../src/home-task-03-04-05/services/jwt.service';
import { setupDBForTests, seedData } from '../db/setup-db';
import { config } from 'dotenv';
import { uuid } from 'uuidv4';

let jwtToken: string;
let server;
let initialData = {
    user: undefined,
    groups: []
};

beforeEach(async () => {
    config();
    server = initiateExpress();
    initialData = seedData;
    await setupDBForTests(initialData);
    jwtToken = generateToken(initialData.user.id);    
}, 20000);


test("Should create group", async () => {
    const groupToBeCreated = {
        name: 'Group10', permissions: ['READ']
    };
    const res = await request(server)
        .post('/groups')
        .set({ authorization: `Bearer ${jwtToken}` })
        .send(groupToBeCreated);

    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Group10');
}, 20000);

test("Should not create group", async () => {

    // try creating duplicate group
    const res1 = await request(server)
        .post('/groups')
        .set({ authorization: `Bearer ${jwtToken}` })
        .send({name: 'Group1', permissions: ['READ']});
    expect(res1.status).toBe(400);

    // try creating group without name
    const res2 = await request(server)
        .post('/groups')
        .set({ authorization: `Bearer ${jwtToken}` })
        .send({ permissions: ['READ'] });
    expect(res2.status).toBe(400);

}, 20000);

test("Should return list of groups", async () => {
    const res = await request(server)
        .get('/groups')
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(initialData.groups.length);
}, 20000);

test("Should return group based on id", async () => {
    const res = await request(server)
        .get(`/groups/${initialData.groups[0].id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(200);
    expect(res.body.name).toBe(initialData.groups[0].name);
}, 20000);


test("Should not return group for invalid id", async () => {
    const res = await request(server)
        .get(`/groups/${uuid()}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(400);
}, 20000);

test("Should update group", async () => {
    const res = await request(server)
        .put(`/groups/${initialData.groups[0].id}`)
        .set({ authorization: `Bearer ${jwtToken}` })
        .send({ permissions: ['DELETE'] });

    expect(res.status).toBe(200);
    expect(res.body.permissions).toEqual(['DELETE']);
}, 20000);


test("Should not update group", async () => {

    // try creating group with invalid permissions structure
    const res3 = await request(server)
        .put(`/groups/${initialData.groups[0].id}`)
        .set({ authorization: `Bearer ${jwtToken}` })
        .send({ permissions: 'Invalid data' });
    expect(res3.status).toBe(400);
}, 20000);

test("Should delete group", async () => {

    const beforeDelete = await request(server)
        .get(`/groups/${initialData.groups[0].id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    const res = await request(server)
        .delete(`/groups/${initialData.groups[0].id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    const afterDelete = await request(server)
        .get(`/groups/${initialData.groups[0].id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(beforeDelete.status).toBe(200);
    expect(res.status).toBe(200);
    expect(afterDelete.status).toBe(400);
}, 20000);

test("Should not delete group", async () => {

    // try deleting non exsiting group
    const resDeleteNonExisting = await request(server)
        .delete(`/groups/${uuid()}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(resDeleteNonExisting.status).toBe(400);

    // try deleting already deleted group (delete the group twice)
    await request(server)
        .delete(`/groups/${initialData.groups[0].id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    const resAlreadyDeletedGroup = await request(server)
        .delete(`/groups/${initialData.groups[0].id}`)
        .set({ authorization: `Bearer ${jwtToken}` });

    expect(resAlreadyDeletedGroup.status).toBe(400);
}, 20000);

test("Should create group user mapping", async () => {
    const res = await request(server)
        .post(`/groups/${initialData.groups[0].id}/users`)
        .set({ authorization: `Bearer ${jwtToken}` })
        .send([initialData.user.id]);

    expect(res.status).toBe(200);
}, 20000);


