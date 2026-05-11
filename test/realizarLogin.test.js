import { realizarLogin } from "../src/realizarLogin.js";
import assert from 'node:assert';

/* 
Escreva 4 testes: 
1) Sucesso
2) Credencial expirada
3) Usuario não encontrado 
4) Senha incorreta para o usuário encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais
*/

describe('Validações de Login', function(){
    it('1) Sucesso', function(){
        //arrange
        const email = 'nathalia.silva@teste.com';
        const senha = 123456;
        //act
        const login = realizarLogin(email, senha);
        //assert
        assert.equal(login, 'login foi realizado com sucesso');
    });
    
    it('2) Credencial expirada', function(){
        //arrange
        const email = 'rubens.silva@teste.com';
        const senha = 'teste';
        //act
        const login = realizarLogin(email, senha);
        //assert
        assert.equal(login, 'credenciais expiraram');
    });

    it('3) Usuario não encontrado', function(){
        //arrange
        const email = 'tiago.silva@teste.com';
        const senha = 'teste123';
        //act
        const login = realizarLogin(email, senha);
        //assert
        assert.equal(login, 'usuário não encontrado');
    });

    it('4) Senha incorreta para o usuário encontrado', function(){
        //arrange
        const email = 'jose.silva@teste.com';
        const senha = 'teste123';
        //act
        const login = realizarLogin(email, senha);
        //assert
        assert.equal(login, 'credenciais estão incorretas');
    });
})
 