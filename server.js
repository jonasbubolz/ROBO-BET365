import express from 'express';
import { function_repetir } from './resultado.js';
import cors from 'cors';
import  bodyParser  from 'body-parser';




const server = express()
const port = 2040
server.use(bodyParser.json()) // analisa solicitações com corpo JSON
server.use(
  bodyParser.urlencoded({ // analisa solicitações com corpo codificado em url
    extended: true,
  })
)
server.use(
  cors({
    credentials: true,
    origin: true
  })
)

server.options('*', cors);

// server.get('/', welcomeBot);
// server.get('/games', allGames);
// server.post('/data', insertResult);


server.listen(process.env.PORT || port, function() {
 /// console.log("Express server listening on port %d in %s mode", this.address().port, server.settings.env);
    console.log(`server on http://localhost:${port}/`)
})

await function_repetir()