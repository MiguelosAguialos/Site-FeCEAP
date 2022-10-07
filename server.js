const express = require("express")
const server = express()
const data = require('./src/data.json')

const nunjucks = require("nunjucks")
nunjucks.configure("views",{express: server,noCache: true})

//Configurando o servidor express para que ele "enxergue" arquivos estáticos da nossa página
server.use(express.static("public"))


const projetos = [
    {
        img: "https://cdn-icons-png.flaticon.com/512/3057/3057735.png",
        title: "Por que a Terra NÃO é plana?",
        category: "Ciências",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: ""
    }, 
    {
        img: "https://cdn-icons-png.flaticon.com/512/1396/1396673.png",
        title: "O advento de battle royalle, um estudo sobre Free Fire",
        category: "Administração",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: ""
    }, 
    {
        img: "https://cdn-icons-png.flaticon.com/512/4668/4668541.png",
        title: "Satélite caseiro",
        category: "Engenharia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: ""
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3057/3057735.png",
        title: "Exemplo",
        category: "Exemplo 2",
        description: "Exemplo 3",
        url: ""
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3057/3057735.png",
        title: "Exemplo",
        category: "Exemplo 2",
        description: "Exemplo 3",
        url: ""
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3057/3057735.png",
        title: "Por que a Terra NÃO é plana?",
        category: "Ciências",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: ""
    }
]
//Criar acesso à raiz do nosso sistema
//A isso daqui chama<h1> Oi do backend </h1>remos de: ROTA
//Portanto estamos configurando agora a rota padrão do nosso site:
server.get("/", function(req, res){
    //fazer só os 3 últimos projetos aparecerem nessa pág
    const reversedProjetos = [...projetos].reverse();//aqui reverto a ordem dos projetos
    let lastProjects = [];
    //aqui uso um laço pra percorrer só 3 projetos e adiciono eles ao novo vetor
    for (projeto of reversedProjetos) {
        if (lastProjects.length < 3){
            lastProjects.push(projeto)
        }
    }
    res.render("index.html", {projetos: lastProjects})//passei o objeto projetos com o conteúdo do objeto lastProjetos manipulado acima
    // res.sendFile(__dirname+"/index.html")
})

server.get("/projects", function(req, res){
    res.render("projects.html", {projetos})
})

server.get("/data", function(req,res){
    data.nums +=1
    return res.json(data)
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
