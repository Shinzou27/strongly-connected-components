import { Request, Response } from 'express'
import { treeService } from '../factories/makeTreeService'

export class TreeController {

  async createTree(req: Request, res: Response): Promise<Response> {
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

    const tree = treeService.createGraph(vertexTree)

    treeService.addAdjacencies(tree, adjacencies)
    tree.DFS()
  
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
      
      return res.json(finalToJson)
  }
}
