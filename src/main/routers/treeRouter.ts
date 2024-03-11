import { Request, Response, Router } from 'express'
import { TreeController } from '../controller/TreeController'
import { createTreeService } from '../factories/makeTreeService'

const treeController = new TreeController(createTreeService)
const treeRouter = Router()

treeRouter.get('/', async (req: Request, res: Response) => {
  treeController.createTree()
})

export { treeRouter }
