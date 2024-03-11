import { Vertex } from './Vertex'

class Graph {
  private vertex: Vertex[]
  private cycles: number
  private time: number

  constructor() {
    this.vertex = []
    this.cycles = 0
    this.time = 0
  }

  get vertexes(): Vertex[] {
    return this.vertex
  }

  addVertex(action: string): Vertex | undefined {
    for (let vertex of this.vertex) {
      if (vertex.value === action) return vertex
    }

    const newVertex = new Vertex(action)
    this.vertex.push(newVertex)

    return newVertex
  }

  DFS() {
    // Depth-First Search
    for (let vertex of this.vertex) {
      vertex.color = 'branco'
    }

    for (let vertex of this.vertex) {
      if (vertex.color == 'branco') {
        this.DFSvisit(vertex)
      }
    }
    console.log('THERE ARE ' + this.cycles + ' CYCLE(S) IN THE GRAPH!')
  }

  DFSvisit(vertex: Vertex) {
    this.time = this.time + 1
    vertex.initialTime = this.time // The moment of the search when the vertex was discovered
    vertex.color = 'cinza'
    if (vertex.adjacencies) {
      for (let adj of vertex.adjacencies) {
        if (adj.color == 'branco') {
          adj.parent = vertex
          this.DFSvisit(adj)
        } else if (adj.color == 'cinza') {
          this.cycles++
        }
      }
    }
    vertex.color = 'preto'
    this.time = this.time + 1
    vertex.finalTime = this.time // The moment of the search when all neighbors of the vertex were examined
  }
}

export { Graph }
