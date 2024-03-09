import { Vertice } from './Vertice'

class Graph {
  private _nos: Map<string, Vertice>
  public get nos(): Map<string, Vertice> {
    return this._nos
  }
  public set nos(v: Map<string, Vertice>) {
    this._nos = v
  }

  constructor() {
    this._nos = new Map()
  }

  adicionarArco(pai, filho) {
    const noPai = this.adicionarVertice(pai, pai)
    const noFilho = this.adicionarVertice(filho, filho)
    noPai?.insereAdjacencia(noFilho)

    return [noPai, noFilho]
  }

  adicionarVertice(acao, id): Vertice | undefined {
    if (this.nos.has(id)) {
      return this.nos.get(id)
    }

    const vertice = new Vertice(acao, id)
    this.nos.set(id, vertice)

    return vertice
  }

  removerVertice(id) {
    const atual = this.nos.get(id)
    if (atual) {
      for (const no of this.nos.values()) {
        no.removeAdjacency(atual)
      }
    }

    return this.nos.delete(id)
  }
}

export { Graph }
