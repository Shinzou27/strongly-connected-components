import { randomUUID } from 'crypto'

interface Verticerequest {
  id?: string
  adjacencies?: Vertice[]
  acao: string
}

class Vertice {
  private _id: string
  private adjacencies?: Vertice[]
  private _acao: string

  constructor(props: Verticerequest) {
    let id = props.id
    this._id = id ?? randomUUID()
    this.adjacencies = props.adjacencies
    this._acao = props.acao
  }

  public get id(): string {
    return this._id
  }

  public get acao(): string {
    return this._acao
  }
  public set acao(v: string) {
    this._acao = v
  }

  public get adjacencia(): Vertice[] | undefined {
    return this.adjacencies ?? undefined
  }

  public set adjacencia(v: Vertice[]) {
    this.adjacencies = v
  }

  insereAdjacencia(vertice) {
    this.adjacencies?.push(vertice)
  }

  removeAdjacency(vertex) {
    this.adjacencies = this.adjacencies?.filter((v) => v !== vertex)
  }
}

export { Vertice }
