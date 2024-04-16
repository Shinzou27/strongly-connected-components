import { Request, Response } from 'express'
import { treeService } from '../factories/makeTreeService'

export class TreeController {

  async createTree(req: Request, res: Response): Promise<Response> {
    // exemplo do fluxo 
    const vertexTree = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      /*
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      */
    ]
    
    let adjacencies: [number, number][] = [
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 1],
      [3, 2],
      [3, 4],
      [4, 6],
      [5, 3],
      [5, 6],
      [6, 1]
      /*
      [0, 1],
      [1, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
      [3, 2],
      [3, 7],
      [4, 0],
      [4, 5],
      [5, 6],
      [6, 5],
      [6, 7],
      [7, 7],
      */
    ]
    const tree = treeService.createGraph(vertexTree)
    treeService.addAdjacencies(tree, adjacencies)
    tree.DFS()

    const treeTranspose = treeService.createGraph(vertexTree);
    treeService.addAdjacencies(treeTranspose, adjacencies.map((adjacency) => [adjacency[1], adjacency[0]]))
    treeTranspose.changeOrder(tree.getOrderAsArray());
    treeTranspose.DFS()

      let final = new Map()
      for(let j = 0; j < tree.vertexes.length; j++){
          final.set(j, tree.vertexes[j])
      }
      const finalToJson = Array.from(final).map(([key, value]) => {
        return {
          value: value.value,
          initialTime: value.initialTime,
          finalTime: value.finalTime,
          color: value.color,
          parent: value.parent?.value,
          adjacencies: value.adjacencies.map((v: any) => v.value)
        } as {
          value: string,
          initialTime: number,
          finalTime: number,
          color: string,
          parent?: string,
          adjacencies: string[]
        }
      })
      
      tree.clusters = treeTranspose.clusters
      tree.vertexes.forEach(v => {
        tree.recommendations(v);
      });
      
      return res.json(finalToJson)
  }
}
