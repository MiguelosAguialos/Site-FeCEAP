const express = require("express")
const server = express()

const nunjucks = require("nunjucks")
nunjucks.configure("views",{express: server,noCache: true})

//Configurando o servidor express para que ele "enxergue" arquivos estáticos da nossa página
server.use(express.static("public"))

//Criar acesso à raiz do nosso sistema
//A isso daqui chamaremos de: ROTA
//Portanto estamos configurando agora a rota padrão do nosso site:
const projetos = [
    {
        img: "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png", 
        title: "Teste de projeto", 
        category: "Nenhuma", 
        description:"Teste para ver se o nunjuncks consegue pegar", 
        url:"https://www.youtube.com"
    }
]
server.get("/", function(req, res){
    res.render("index.html", {projetos})
    // res.sendFile(__dirname+"/index.html")
    console.log("Hello do Frontend!!!!")
})

server.get("/projects", function(req, res){
    res.render("projects.html", {projetos})
})

server.listen(3000)

//Criar uma rota para a página projects.html


// BACKEND???
// parte de tras do sistema, usuário n tem acesso
// Responsabilidades do backend
// 1 - Receber requisições do usuário (frontend)
// 2 - Devolver respostas ao cliente
// 3 - REGRAS DE NEGÓCIO (lógica de funcionamento do sistema)
// 4 - Dados (tratamento, persistência)

//#1: npm init -y
//#2: npm install express
//#3: npm install nodemon
//#4: npm install nunjucks
