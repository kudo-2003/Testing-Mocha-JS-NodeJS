import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../back_end/server.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('📌 API Testing với Mocha & Chai', () => {
  it('GET /users - Lấy danh sách người dùng', async () => {
    const res = await chai.request(app).get('/users');
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
  });

  it('POST /users - Thêm người dùng mới', async () => {
    const res = await chai.request(app).post('/users').send({ name: 'Alice' });
    expect(res).to.have.status(201);
    expect(res.body).to.have.property('name', 'Alice');
  });

  it('DELETE /users/:id - Xóa người dùng', async () => {
    const res = await chai.request(app).delete('/users/1');
    expect(res).to.have.status(204);
  });
});
