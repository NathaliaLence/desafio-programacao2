/*Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: 
id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos
usuarios como expirado sendo true.*/
const users = [
    {
        id: 1,
        nome: 'Nathalia Silva',
        email:'nathalia.silva@teste.com',
        senha:'123456',
        expirado: false
    },
    {
        id: 2,
        nome: 'Jose Silva',
        email:'jose.silva@teste.com',
        senha:'2468',
        expirado: false
    },
    {
        id: 3,
        nome: 'Antonio Silva',
        email:'antonio.silva@teste.com',
        senha:'teste123',
        expirado: true
    },
    {
        id: 4,
        nome: 'Rubens Silva',
        email:'rubens.silva@teste.com',
        senha:'teste',
        expirado: true
    },   
]

/* Construa uma função de para realizar login. Quem usar a função deverá receber uma 
 mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com 
 email e senha iguais aos informados. A função deve dizer que as credenciais expiraram 
 caso expirado for true. A função também tem que dizer que as credenciais estão incorretas 
 caso o email não exista ou a senha esteja incorreta para aquele email. */

 export function realizarLogin(email, senha){
    for (let i = 0; i < users.length; i++){
        if(users[i].email == email){
            if(users[i].senha != senha){
                return 'credenciais estão incorretas';
            }
            if(users[i].expirado == true){
                return 'credenciais expiraram';
            }
            return 'login foi realizado com sucesso';
        }
    }
    return 'usuário não encontrado';
 }