import { app } from './config/app'
const port = 4000
const backLog = (): void => console.log('server running at http://localhost:4000')

app.listen(port, backLog)
