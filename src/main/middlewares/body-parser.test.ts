import request from 'supertest'
import app from '../config/app'
describe('Name of the group', () => {
  test('should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/test_body_parser')
      .send({ name: 'killerShot' })
      .expect({ name: 'killerShot' })
  })
})
