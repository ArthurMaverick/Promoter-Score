import request from 'supertest'
import app from '../config/app'


describe('Cors middleware', () => {
  test('Should enable CORS', async ()=> {
    app.post('/test_CORS', (req, res)=> {
      res.send()
    })
    await request(app)
      .get('/test_CORS')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})