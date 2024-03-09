class Vertice {
  private _acao: string
  public get acao(): string {
    return this._acao
  }
  public set acao(v: string) {
    this._acao = v
  }

  private adjacencies: Vertice[]
  public get adjacencia(): Vertice[] {
    return this.adjacencies
  }
  public set adjacencia(v: Vertice[]) {
    this.adjacencies = v
  }

  constructor(acao: string) {
    this.acao = acao
    this.adjacencia = []
  }

  insereAdjacencia(vertice) {
    this.adjacencia.push(vertice)
  }

  removeAdjacency(vertex) {
    this.adjacencies.filter((v) => v !== vertex)
  }
}

export { Vertice }
