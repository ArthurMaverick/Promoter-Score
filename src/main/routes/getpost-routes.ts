import { Router } from 'express'

export default (router: Router) => {
  router.post('/', (req, res) => {
    return res.send(req.body)
  })
}
