const request = require('supertest');
const app = require('./app');
const {describe, test, afterAll, expect} = require("@jest/globals");

afterAll(() => {

});

describe('Root path', () => {
    test('Should response GET method', () => {
        return request(app)
            .get("/")
            .then(response => {
               expect(response.statusCode).toBe(200);
            });
    });
});

describe('Bicycle path', () => {
    test('Should response GET method', () => {
        return request(app)
            .get("/api/bicycles")
            .then(response => {
               expect(response.statusCode).toBe(200);
            });
    });
});