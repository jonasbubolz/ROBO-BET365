//IMPORTA MODULO EXPRESS
import express from 'express';

//IMPORTA MODULO MYSQL
import mysql from 'mysql2';

//APP
const app = express();


//CONFIGURAÇÃO DE CONEXÃO
const conexao = mysql.createConnection({
    host: "bet365.mysql.dbaas.com.br",
    port: 3306,
    user: "bet365",
    password: "Dimens@o1",
    database: "bet365",
    connectionLimit: 15,
    queueLimit: 30

})

//TESTE DE CONEXAO
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Conexão efetuada com sucesso!');
}
)


conexao.query("SELECT * FROM apostas", function(err, row, fields){
    if(!err){

    }else{

        console.log('Erro: Consulta não realizada !');
    }
});