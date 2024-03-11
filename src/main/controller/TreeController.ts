import { TreeService } from '../../app/TreeService'

export class TreeController {
  private treeService: TreeService

  constructor(treeService: TreeService) {
    this.treeService = treeService
  }

  async createTree(): Promise<void> {
    const vertexTree = [
      'Dor',
      'Febre',
      'Cansaço',
      'Cultura positiva',
      'Troponina aumentada',
      'TSH aumentado',
      'Vertigem',
      'Infecção bacteriana',
      'Infarto',
      'Hipotireoidismo',
      'Labirintite',
    ]

    const tree = this.treeService.createGraph(vertexTree)

    let adjacencies: [number, number][] = [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [8, 8]
    ]
    this.treeService.addAdjacencies(tree, adjacencies)
    tree.DFS()
  
      let final = new Map()
      for(let j = 0; j < tree.vertexes.length; j++){
          final.set(j, tree.vertexes[j])
      }
      console.log("black:")
      console.log(final)
  }
}
