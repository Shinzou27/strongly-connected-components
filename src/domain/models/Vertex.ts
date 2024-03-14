class Vertex {
  private _value: string
  private _color: string = 'branco' || 'cinza' || 'preto'
  private _parent?: Vertex
  private _initialTime: number
  private _finalTime: number
  private _adjacencies: Vertex[]

  constructor(value: string) {
    this._value = value
    this._color = ''
    this._initialTime = 0
    this._finalTime = 0
    this._adjacencies = []
  }

  public get value(): string {
    return this._value
  }

  public get initialTime(): number {
    return this._initialTime
  }

  public set initialTime(discovery: number) {
    this._initialTime = discovery
  }

  public get finalTime(): number {
    return this._finalTime
  }

  public set finalTime(finalTime: number) {
    this._finalTime = finalTime
  }

  public get adjacencies(): Vertex[] {
    return this._adjacencies
  }
  public set color(color: string) {
    this._color = color
  }
  public get color(): string {
    return this._color
  }

  public get parent(): Vertex | undefined {
    return this._parent ?? undefined
  }

  public set parent(parent: Vertex | undefined) {
    this._parent = parent
  }

  insereAdjacencia(vertex: Vertex) {
    this._adjacencies.push(vertex)
  }

  removeAdjacency(vertex: Vertex) {
    this._adjacencies = this._adjacencies?.filter((v) => v !== vertex)
  }
}

export { Vertex }
