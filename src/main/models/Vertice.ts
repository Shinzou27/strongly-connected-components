class Vertice {
    private _acao : string;
    public get acao() : string {
        return this._acao;
    }
    public set acao(v : string) {
        this._acao = v;
    }
        
    private _adjacencia : Vertice[];
    public get adjacencia() : Vertice[] {
        return this._adjacencia;
    }
    public set adjacencia(v : Vertice[]) {
        this._adjacencia = v;
    }
    
    constructor(acao:string) {
        this.acao = acao
        this.adjacencia = []
    }

    insereAdjacencia(vertice){
        this.adjacencia.push(vertice)
    }
}

export {Vertice}