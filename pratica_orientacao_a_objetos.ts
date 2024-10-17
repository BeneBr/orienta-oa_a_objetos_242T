class Treino{
    descricao: string
    serie: number
    repeticoes: number

    constructor(descricao: string,
                serie: number, 
                repeticoes: number
                )
    {
        this.descricao = descricao
        this.serie = serie
        this.repeticoes = repeticoes
    }
}

class Aluno{
    nome: string = ""
    sobre_nome: string = ""
    peso: number = 0
    altura: number = 0
    treinos: Treino[] = []

    calcularIMC(): number{
        return this.peso / this.altura * this.altura
    }

    adicionarTreino(treino: Treino){
        this.treinos.push(treino)
    }
}

class Academia{
    alunos: Aluno[] = []

    adicionarAluno(aluno: Aluno){
        this.alunos.push(aluno)
    }

    adicionarTreinoAluno(aluno: Aluno,descricao: string, serie:number, repeticoes: number){
        const treino = new Treino(descricao, serie, repeticoes)
        aluno.adicionarTreino(treino)
    }

}

let academia = new Academia()
let aluno_1 = new Aluno()
aluno_1.nome = "Pedro"
aluno_1.sobre_nome = "Das Neves"

let aluno_2 = new Aluno()
aluno_2.nome = "João"
aluno_2.sobre_nome = "Das Canhas"

academia.adicionarAluno(aluno_1)
academia.adicionarAluno(aluno_2)
academia.adicionarTreinoAluno(aluno_1, "Biceps",3, 12)

