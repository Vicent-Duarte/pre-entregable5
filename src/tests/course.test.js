const request = require("supertest");
const app = require ('../app');

const BASE_URL = '/api/v1/courses';
let courseId;


const course = {
    name: "programación",
    credits: 10,
};

test("POST -> BASE_URL, should return statusCode 201, and res.body.name === course.name", async() => {
    const res = await request(app)
        .post(BASE_URL)
        .send(course)
    
    courseId = res.body.id
    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(course.name)
});

test("GET -> BASE_URL, should return statusCode 200, and res.body.length === 1", async() => {
    const res = await request(app)
    .get(BASE_URL)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
});

test("GET -> BASE_URL/courseId, should return statusCode 200, and res.body.name === course.name", async() => {
    const res = await request(app)
    .get(`${BASE_URL}/${courseId}`)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(course.name)
})
test("PUT -> BASE_URL/courseId, should return statusCode 200, and res.body.name === courseUpdate.name", async() => {
    const courseUpdate = {
        name: "William",
    };
    const res = await request(app)
    .put(`${BASE_URL}/${courseId}`)
    .send(courseUpdate)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(courseUpdate.name)
})
test("DELETE -> BASE_URL/courseId, should return statusCode 204", async() => {
    const res = await request(app)
    .delete(`${BASE_URL}/${courseId}`)
    
    expect(res.statusCode).toBe(204)
});