import { TreeService } from '../../app/TreeService'

export class TreeController {
  private treeService: TreeService

  constructor(treeService: TreeService) {
    this.treeService = treeService
  }

  async createTree(): Promise<void> {
    // exemplo do fluxo 
    const vertexTree = [
      'Pegar Senha', 
      'Triagem', 
      'Cadastro', 
      'Fila de espera', 
      'Avaliação Médica', 
      'Exames', 
      'Cirurgia', 
      'Internação', 
      'Alta'
    ]
    
    let adjacencies: [number, number][] = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 4],
      [5, 6],
      [6, 4],
      [6, 7],
      [0, 6],
      [7, 8]
    ]
    
    //anamnese 
    // const vertexTree = [
    //   'Sintomas respiratórios',
    //   'Febre Alta', 
    //   'Tosse produtiva', 
    //   'Suspeita de gripe', 
    //   'Coriza', 
    //   'Suspeita de resfriado', 
    //   'Suspeita de pneumonia', 
    //   'Sintomas de pele',
    //   'Exposição a alergenos conhecidos',
    //   'Suspeita de alergia de contato',
    //   'Histórico de alergias na família',
    //   'Suspeita de eczema',
    //   'Suspeita de infecção da pele',
    //   'Próxima pergunta'
    // ]
    
    // let adjacencies: [number, number][] = [
    //   [0, 1],
    //   [1, 2],
    //   [2, 3], 
    //   [1, 4],
    //   [4, 5],
    //   [4, 13],
    //   [0, 7],
    //   [7, 8],
    //   [8, 9],
    //   [8, 10],
    //   [10, 11],
    //   [10, 12]
    // ]

    const tree = this.treeService.createGraph(vertexTree)

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
