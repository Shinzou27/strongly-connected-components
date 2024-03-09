import { Request, Response, Router } from 'express'
import { TreeController } from '../controller/TreeController'

const treeController = new TreeController()
const treeRouter = Router()

treeRouter.get('/', async (req: Request, res: Response) => {
  await treeController.getTree()
  return res.send('Hello, World!')
})

export { treeRouter }
