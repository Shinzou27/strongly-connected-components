import express from 'express'
import { treeRouter } from './routers'
const app = express()

app.use(express.json())

app.use('/', treeRouter)

export { app }
