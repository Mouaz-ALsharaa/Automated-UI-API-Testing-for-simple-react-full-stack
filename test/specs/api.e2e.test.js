const request = require('supertest');
const app = require('../../src/server/index'); 

describe('API Endpoints', () => {
  let itemId;

  it('should fail login with invalid credentials', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ username: 'wrong', password: 'wrong' });
    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe('Invalid credentials');
  });

  it('should login with valid credentials', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ username: 'admin', password: 'admin1235' });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Login successful');
  });

  it('should get items (empty array)', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should add new item', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({ value: 'Test API Item' });
    expect(res.statusCode).toBe(200);
    expect(res.body.value).toBe('Test API Item');
    itemId = res.body.id;
  });

  it('should fail to add item with empty value', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Value is required');
  });

  it('should edit item', async () => {
    const res = await request(app)
      .put(`/api/items/${itemId}`)
      .send({ value: 'Edited API Item' });
    expect(res.statusCode).toBe(200);
    expect(res.body.value).toBe('Edited API Item');
  });

  it('should fail to edit item with invalid id', async () => {
    const res = await request(app)
      .put('/api/items/999999')
      .send({ value: 'Should Fail' });
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Item not found');
  });

  it('should delete item', async () => {
    const res = await request(app)
      .delete(`/api/items/${itemId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Item deleted');
  });

  it('should fail to delete item with invalid id', async () => {
    const res = await request(app)
      .delete('/api/items/999999');
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Item not found');
  });
});