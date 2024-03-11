import { Graph } from '../domain/models/Graph'

export class TreeService {
  createGraph(vertices: string[]): Graph {
    const graph = new Graph()
    for (let vertex of vertices) {
      graph.addVertex(vertex)
    }
    return graph
  }

  addAdjacencies(graph: Graph, adjacencies: [number, number][]): void {
    for (let [from, to] of adjacencies) {
      graph.vertexes[from].adjacencies.push(graph.vertexes[to])
    }
  }
}
