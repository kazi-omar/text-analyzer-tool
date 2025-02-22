import request from 'supertest';
import { Express } from 'express';
import { createApp } from '../src/appTest'; // Assuming you have a function to create the app

let app: Express;

beforeAll(async () => {
    app = await createApp();
});

describe('Text Routes', () => {
    let token: string;
    let textId: string;

    beforeAll(async () => {
        // Assuming you have a way to get a valid token
        const response = await request(app)
            .post('/api/v1/auth/login')
            .send({ email: 'test@example.com', password: 'password' });
        token = response.body.token;
    });

    it('should create a new text', async () => {
        const response = await request(app)
            .post('/api/v1/texts')
            .set('Authorization', `Bearer ${token}`)
            .send({ content: 'This is a sample text.' });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        textId = response.body.id;
    });

    it('should get a text by ID', async () => {
        const response = await request(app)
            .get(`/api/v1/texts/${textId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', textId);
    });

    it('should update a text by ID', async () => {
        const response = await request(app)
            .put(`/api/v1/texts/${textId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ content: 'Updated text content.' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('text_content', 'Updated text content.');
    });

    it('should delete a text by ID', async () => {
        const response = await request(app)
            .delete(`/api/v1/texts/${textId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(204);
    });
});
