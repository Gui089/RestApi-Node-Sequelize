import Aluno from "../models/Aluno.js";

class HomeController {

    async index(req, res) {
        
        const novoAluno = await Aluno.create({
            nome:"Guilherme",
            sobrenome:"Coutinho",
            email:"guilherme@gmail.com",
            idade:23,
            peso:101.01,
            altura:1.93
        })

        res.status(200).json(novoAluno);
    }
}

export default new HomeController();