const request = require('supertest');
const app = require('../src/index');  // Your express app

describe('POST /recommendations', () => {
    it('should return a list of recommended jobs', async () => {
        const userProfile = {
            name: "John Doe",
            skills: ["JavaScript", "Node.js", "React"],
            experience_level: "Intermediate",
            preferences: {
                desired_roles: ["Software Engineer", "Full Stack Developer"],
                locations: ["San Francisco", "Remote"],
                job_type: "Full-Time"
            }
        };

        const res = await request(app).post('/recommendations').send(userProfile);
        expect(res.statusCode).toEqual(200);
        expect(res.body.recommendations.length).toBeGreaterThan(0);
    });
});
