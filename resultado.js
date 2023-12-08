import {firefox, request} from 'playwright-firefox'

//############################################################################
//IMPORTA MODULO EXPRESS
import express from 'express';

//IMPORTA MODULO MYSQL
import mysql from 'mysql2';

//APP
const app = express();


const browser = await firefox.launch({
  headless: false
})

const page = await browser.newPage({
  
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36'

})

export async function function_repetir() {

  
        

        var etapa = 0;

        async function scraping(){
          try {


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

//################################################################

//################### VARIAVEIS NAVEGACAO #########################
let LINK_BET365 = '';
let BOTAO_LOGIN = '';
let TEMPO_TIMEOUT = '';
let USUARIO = '';
let SENHA = '';
let BTN_LOGAR = '';
let BTN_FUTEBOL = '';
let BTN_GOLS = '';
let BTN_MAIS15 = '';
let CAMPO_VALOR = '';
let BTN_APOSTAR = '';
let BTN_MEMBRO = '';
let BTN_SAIR = '';

conexao.query("SELECT * FROM etapas_nav_bet365", async function(err, rows, fields){

  let dados=JSON.parse(JSON.stringify(rows)) 
  let LINK_BET365 = '';
  let BOTAO_LOGIN = '';
  let TEMPO_TIMEOUT ='';
  let USUARIO =  '';
  let SENHA =  '';
  let BTN_LOGAR =  '';
  let BTN_FUTEBOL =  '';
  let BTN_GOLS =  '';
  let BTN_MAIS15 =  '';
  let CAMPO_VALOR =  '';
  let BTN_APOSTAR =  '';
  let BTN_MEMBRO =  '';
  let BTN_SAIR =  '';

  LINK_BET365 = dados[0].link_bet365;
  BOTAO_LOGIN = dados[0].botao_login;
  TEMPO_TIMEOUT = dados[0].tempo_timeout;
  USUARIO =  dados[0].usuario;
  SENHA =  dados[0].senha;
  BTN_LOGAR =  dados[0].btn_logar;
  BTN_FUTEBOL =  dados[0].btn_futebol;
  BTN_GOLS =  dados[0].btn_gol;
  BTN_MAIS15 =  dados[0].btn_mais15;
  CAMPO_VALOR =  dados[0].campo_valor;
  BTN_APOSTAR =  dados[0].btn_apostar;
  BTN_MEMBRO =  dados[0].btn_membro;
  BTN_SAIR =  dados[0].btn_sair;
  
  
   




//##################################################################


conexao.query("SELECT a.stake, a.liga, a.time, a.user_bet365 as aposta_user_bet365,c.user_bet365 as cliente_user_bet365,c.senha_bet365 as cliente_senha_bet365, a.status  FROM apostas as a, clientes as c WHERE a.user_bet365 = c.user_bet365 and a.status = 'Em aberto'", async function(err, rows, fields){

  let dadosbet=JSON.parse(JSON.stringify(rows)) 
  let USUARIO_BET365 = '';
  let SENHA_BET365 = '';
  let STATUS = '';
  let TIME = '';
  let LIGA = '';
  let STAKE = '';

  USUARIO_BET365 = dadosbet[0].aposta_user_bet365;
  SENHA_BET365 = dadosbet[0].cliente_senha_bet365;    
  STATUS = dadosbet[0].status;
  TIME = dadosbet[0].time;
  LIGA = dadosbet[0].liga;
  STAKE = dadosbet[0].stake;
        //           COLOCAR VARIAVEL LINK_BET365 DO BANCO
        await page.goto(LINK_BET365)
        //ACESSOU A PAGINA PRINCIPAL

        await page.waitForLoadState('networkidle')
        //VERIFICOU SE ESTA ENTRANDO
        
        //           COLOCAR VARIAVEL BOTAO_LOGIN DO BANCO
        await page.locator(BOTAO_LOGIN).first().click();
        //ACESSOU A TELA DE LOGIN
        await page.waitForTimeout(2000)
        //TEMPO DE TRANSIÇÃO DE PAGINA
   
         //           COLOCAR VARIAVEL USUARIO DO BANCO E USUARIO DO BILHETE
        await page.getByPlaceholder(USUARIO).fill(USUARIO_BET365); 
        // ESTE USUÁRIO VEM DO BANCO DE DADOS
        //DIGITOU USUARIO
        await page.waitForTimeout(2000)
        //TEMPO DE TRANSIÇÃO DE PAGINA
        
         //           COLOCAR VARIAVEL SENHA DO BANCO E SENHA DO BILHETE
        await page.getByPlaceholder(SENHA).fill(SENHA_BET365); 
        // ESTA SENHA VEM DO BANCO DE DADOS
        //DIGITOU A SENHA
        await page.waitForTimeout(2000)
        //TEMPO DE TRANSIÇÃO DE PAGINA
        
         //           COLOCAR VARIAVEL BTN_LOGAR DO BANCO
        await page.locator(BTN_LOGAR).first().click();
        //ACESSOU A TELA DE LOGIN
        await page.waitForTimeout(5000)
        //TEMPO DE TRANSIÇÃO DE PAGINA
        
        //VER SE ESTA LOGADO
        async function ver_logado(){
          await page.waitForTimeout(2000)
            
             let verificar_logado = await page.locator('body > div:nth-child(1) > div > div.wc-WebConsoleModule_SiteContainer > div.wc-WebConsoleModule_Header > div > div.hm-MainHeaderWide.Hidden > div.hm-MainHeaderCentreWide > div.hm-MainHeaderCentreWide_Link.hm-HeaderMenuItemMyBets.hm-HeaderMenuItemMyBets_WidthState-1 > div').getByText();
       
             return{
                      verificar_logado
                   }
            
        }
        const logado = (await ver_logado()) 
        console.log('VERIFICADO: '+ logado.verificar_logado[0]);
        
        await page.waitForTimeout(50000)

        if(verificado == 'Minhas Apostas'){

          //LOGADO SIM
          logado = 1;
          console.log('LOGADO!');
        }
        else
        {
          console.log('NAO LOGADO!');
        }
      
        //ENTRA NO JOGO
        await page.waitForTimeout(2000)

         //           COLOCAR VARIAVEL BTN_FUTEBOL DO BANCO
        //await page.locator(BTN_FUTEBOL).first().click();
        await page.locator(BTN_FUTEBOL).first().click();
        //ENTRA NA TELA DE FUTEBOL
        await page.waitForTimeout(2000)
        //TEMPO DE TRANSIÇÃO DE PAGINA

        await page.getByPlaceholder('Pesquisar na bet365…').fill(LIGA);

        await page.waitForTimeout(3000)
        //TEMPO DE TRANSIÇÃO DE PAGINA
        
        //           COLOCAR VARIAVEL TIME DO BANCO BILHETE
        await page.getByText(TIME).first().click();
        //ENTRA NO JOGO
        await page.waitForTimeout(2000)
        //TEMPO DE TRANSIÇÃO DE PAGINA

        //           COLOCAR VARIAVEL BTN_GOLS DO BANCO
        await page.getByText(BTN_GOLS).first().click();
        //ENTRA EM GOLS DA PARTIDA
        await page.waitForTimeout(2000)
        //TEMPO DE TRANSIÇÃO DE PAGINA

        //           COLOCAR VARIAVEL BTN_MAIS15 DO BANCO
        await page.locator(BTN_MAIS15).first().click();
        //APOSTA EM +1.5
        await page.waitForTimeout(2000)
        //TEMPO DE TRANSIÇÃO DE PAGINA
     
        // SE NAO TIVER MAIS JOGOS FAZ A APOSTA
        await page.locator('body > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div.bss-Footer > div.bss-Footer_DetailsContainer > div.bsf-StakeBox.bsf-StakeBox_MouseMode.bsf-StakeBox_Empty.bsf-StakeBox_Width410.bsf-StakeBox_Standard > div > div.bsf-StakeBox_StakeInput > div > div').first().click();
        await page.waitForTimeout(2000)
        await page.locator('body > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div.bss-Footer > div.bss-Footer_DetailsContainer > div.bsf-StakeBox.bsf-StakeBox_MouseMode.bsf-StakeBox_Empty.bsf-StakeBox_Width410.bsf-StakeBox_Standard > div > div.bsf-StakeBox_StakeInput > div > div > div.bsf-StakeBox_StakeValue.bsf-StakeBox_StakeValue-input.bsf-StakeBox_StakeValue-empty').first().fill('0.75');
        await page.waitForTimeout(2000)
        await page.getByText('Fazer aposta').first().click();
        await page.waitForTimeout(2000)
        //TEMPO DE TRANSIÇÃO DE PAGINA


                // enviando os dados para o banco mySQL
              //  await save_data.goto('https://www.sistemarastrear.com.br/bet365/robo.php?liga=copadomundo&horaeventobet='+horaeventobet+'&time1='+time1+'&time2='+time2+'&resultado='+resultado+'')

              //  await page.waitForTimeout(6000)
                // fecha a nova página criada
              //  await save_data.close()

              //  console.log('results', horaeventobet,time1,time2)
                // atualiza a página da bet

              });
            });    

            //    await page.reload()


          } catch (error) {
            console.log(error.error)
          }
      
        }

        while(true){
          try {
            console.log('... Iniciando')
            await page.waitForTimeout(30000)
            await scraping()
        
          } catch (error) {
            console.log(error)
            await scraping()
          }
        }

}

