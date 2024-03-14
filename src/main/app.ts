import express from 'express'
import { treeRouter } from './routers'
import cors from 'cors'


const app = express()
app.use(cors())

app.use(express.json())

app.use('/', treeRouter)

export { app }