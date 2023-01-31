const {test, expect, beforeAll, afterAll} = require('@jest/globals');
const {connect} = require('../db/mongodb');

/**
 * @type {import('mongoose').Connection}
*/
let conn;

beforeAll(async () => {
    conn = await connect();
})

afterAll(async () => {
    conn.dropDatabase('app_test');
})

test('MongoDB connection', async () => {
    expect(conn).not.toBeNull();
    let col = conn.collection('test');
    await col.insertOne({name: 'test'});
    let result = await col.findOne({name: 'test'});
    expect(result).not.toBeNull();
});

test('Singleton connection', async () => {
    let conn2 = await connect();
    expect(conn2).toBe(conn);
});