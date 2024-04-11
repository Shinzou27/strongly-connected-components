import { Vertex } from './Vertex'

class Graph {
  private vertex: Vertex[]
  private cycles: number
  private time: number
  private edges: number 
  private edgesCruzadas: number
  private edgesDiretas: number
  private order: string
  private clusters: Vertex[][]

  constructor() {
    this.vertex = []
    this.cycles = 0
    this.time = 0
    this.edges = 0
    this.edgesCruzadas = 0
    this.edgesDiretas = 0
    this.order = ''
    this.clusters = []
  }

  get vertexes(): Vertex[] {
    return this.vertex
  }
  getOrderAsArray(): string[] {
    return this.order.split("-");
  }
  findVertexByValue(value: string): Vertex | undefined {
    for (let vertex of this.vertex) {
      if (vertex.value === value) return vertex
    }
  }
  addVertex(action: string): Vertex | undefined {
    for (let vertex of this.vertex) {
      if (vertex.value === action) return vertex
    }

    const newVertex = new Vertex(action)
    this.vertex.push(newVertex)

    return newVertex
  }
  changeOrder(order: string[]): void {
    const newVertexOrder: Vertex[] = [];
    order.forEach((value) => {
      const vertexToAdd = this.findVertexByValue(value);
      newVertexOrder.push(vertexToAdd as Vertex);
    })
    
    this.vertex = newVertexOrder;
  }
  DFS() {
    for (let vertex of this.vertex) {
      vertex.color = 'branco'
    }

    for (let vertex of this.vertex) {
      if (vertex.color == 'branco') {
        if (this.clusters[this.clusters.length - 1]?.length > 0 || this.clusters.length == 0) {
          this.clusters.push([])
        }
        this.DFSvisit(vertex)
        console.log(this.clusters[this.clusters.length - 1]?.length > 0, this.clusters.length == 0);
      }
    }
    console.log('Há ' + this.cycles + ' ciclos no grafo!')
    console.log("Há " + this.edges + " arestas de árvore no grafo")
    console.log("Há " + this.edgesDiretas + " arestas diretas no grafo")
    console.log("Há " + this.edgesCruzadas + " arestas cruzadas no grafo")
    console.log("Ordem: " + this.order)
    for (let vertex of this.vertex) {
      console.log(`Vértice: ${vertex.value} | ${vertex.initialTime}/${vertex.finalTime}`);
    }
    for (let cluster of this.clusters) {
      console.log("Cluster: " + cluster.map((vertex) => vertex.value).join("="));
    }
  }

  DFSvisit(vertex: Vertex) {
    this.time = this.time + 1
    vertex.initialTime = this.time 
    vertex.color = 'cinza'
    if (vertex.adjacencies) {
      for (let adj of vertex.adjacencies) {
        if (adj.color == 'branco') {
          adj.parent = vertex
          this.edges += 1
          this.DFSvisit(adj)
        } else if (adj.color == 'cinza') {
          this.cycles++
        } else {
          if(adj.initialTime > vertex.initialTime) {
            this.edgesDiretas+=1
          } else {
            this.edgesCruzadas +=1
          }
        }
      }
    }
    vertex.color = 'preto'
    this.clusters[this.clusters.length-1].push(vertex)
    this.order = this.order == '' ? vertex.value : vertex.value + "-" + this.order
    this.time = this.time + 1
    vertex.finalTime = this.time 
  }
}

export { Graph }
