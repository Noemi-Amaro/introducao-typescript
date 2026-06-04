// Importa a interface Usuario do arquivo usuario.ts

import { Usuario } from "./usuario";

// Função responsável por simular o cadastro de um usuário
function cadastrarUsuario(usuario:Usuario) : void {//função sem retorno {
console.log("Usuário cadastrado com sucesso")
console.log(usuario);
}

//Objeto criado seguindo a estrutura da interface Usuario
const novoUsuario: Usuario = {
    nome: "Noemi",
    email: "noemi@gmail.com",
    profissao: "Docente",
    idade: 27,
    ativo: true
};

cadastrarUsuario(novoUsuario);