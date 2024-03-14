import { Router } from 'express'
import { TreeController } from '../controller/TreeController'

const treeController = new TreeController()
const treeRouter = Router()

treeRouter.get('/', treeController.createTree)

export { treeRouter }
