require('../models')
const request = require("supertest");
const app = require ('../app');

const BASE_URL = '/api/v1/students';
let studentId;

const student = {
    firstName: "Vicent",
    lastName: "Duarte",
    birthday: '2000-01-20',
    program: 'Development'
};

test("POST -> BASE_URL, should return statusCode 201, and res.body.firstName === student.firstName", async() => {
    const res = await request(app)
        .post(BASE_URL)
        .send(student)
    
    studentId = res.body.id
    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(student.firstName)
});

test("GET -> BASE_URL, should return statusCode 200, and res.body.length === 1", async() => {
    const res = await request(app)
    .get(BASE_URL)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
});

test("GET -> BASE_URL/studentId, should return statusCode 200, and res.body.firstName === student.firstName", async() => {
    const res = await request(app)
    .get(`${BASE_URL}/${studentId}`)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(student.firstName)
})
test("PUT -> BASE_URL/studentId, should return statusCode 200, and res.body.firstName === studentUpdate.firstName", async() => {
    const studentUpdate = {
        firstName: "William",
    };
    const res = await request(app)
    .put(`${BASE_URL}/${studentId}`)
    .send(studentUpdate)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(studentUpdate.firstName)
})
test("DELETE -> BASE_URL/studentId, should return statusCode 204", async() => {
    const res = await request(app)
    .delete(`${BASE_URL}/${studentId}`)
    
    expect(res.statusCode).toBe(204)
});
