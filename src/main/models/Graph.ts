import { Vertice } from "./Vertice";

class Graph {
    private _nos : Map<string, Vertice>;
    public get nos() : Map<string, Vertice> {
        return this._nos;
    }
    public set nos(v : Map<string, Vertice>) {
        this._nos = v;
    }
    
    constructor() {
        this._nos = new Map();
    }

    adicionarArco(pai, filho){
        const noPai = this.adicionarVertice(pai);
        const noFilho = this.adicionarVertice(filho);
        noPai.insereAdjacencia(noFilho);
        noFilho.insereAdjacencia(noPai);

        return [noPai, noFilho];
    }

    adicionarVertice(acao):Vertice|undefined{
        if(this.nos.has(acao)){
            return this.nos.get(acao);
        }
        const vertice = new Vertice(acao);
        this.nos.set(acao, vertice);
        return vertice;
    }

    removerVertice(acao){
        const atual = this.nos.get(acao);
        if (atual) {
            for (const no of this.nos.values()) {
                no.removerAdijacencia(atual);
            }
        }
        return this.nos.delete(acao);
    }
}