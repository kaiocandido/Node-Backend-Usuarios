<h1>Backend para Gestão de Usuários</h1>

<p>Este projeto é um backend desenvolvido em Node.js para gerenciar usuários. Ele permite realizar operações básicas como cadastrar, listar e deletar usuários. Este é um exemplo simples para ajudar a entender como construir e estruturar um backend usando Node.js.</p>

<h2>Índice</h2>
<ul>
    <li><a href="#propósito">Propósito</a></li>
    <li><a href="#instalação">Instalação</a></li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#exemplos-de-código">Exemplos de Código</a></li>
    <li><a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a></li>
    <li><a href="#contribuindo">Contribuindo</a></li>
    <li><a href="#licença">Licença</a></li>
</ul>

<h2 id="propósito">Propósito</h2>

<p>O objetivo deste projeto é fornecer uma API simples para gerenciar usuários, incluindo funcionalidades para:</p>
<ul>
    <li><strong>Cadastrar</strong> novos usuários.</li>
    <li><strong>Listar</strong> todos os usuários cadastrados.</li>
    <li><strong>Deletar</strong> usuários existentes.</li>
</ul>

<h2 id="instalação">Instalação</h2>

<p>Para rodar o projeto localmente, siga os passos abaixo:</p>
<ol>
    <li><strong>Clone o repositório:</strong></li>
    <pre><code>https://github.com/kaiocandido/Node-Backend-Usuarios.git</code></pre></ol>

<h2 id="uso">Uso</h2>

<p>A API fornece os seguintes endpoints para gerenciar usuários:</p>

<h3>1. Cadastrar Usuário</h3>
<ul>
    <li><strong>Endpoint:</strong> <code>POST /usuarios</code></li>
    <li><strong>Descrição:</strong> Cadastra um novo usuário.</li>
    <li><strong>Corpo da Requisição:</strong></li>
    <pre><code>{
  "nome": "Nome do Usuário",
  "email": "email@example.com",
  "senha": "senha123"
}</code></pre>
  
  "message": "Usuário cadastrado com sucesso",
  "usuario": {
    "id": "id-do-usuario",
    "nome": "Nome do Usuário",
    "email": "email@example.com"
  }
}</code></pre>
</ul>

<h3>2. Listar Usuários</h3>
<ul>
    <li><strong>Endpoint:</strong> <code>GET /usuarios</code></li>
    <li><strong>Descrição:</strong> Retorna a lista de todos os usuários cadastrados.</li>
    <li><strong>Resposta:</strong></li>
    <pre><code>[
  {
    "id": "id-do-usuario",
    "nome": "Nome do Usuário",
    "email": "email@example.com"
  }
]</code></pre>
</ul>

<h3>3. Deletar Usuário</h3>
<ul>
    <li><strong>Endpoint:</strong> <code>DELETE /usuarios/:id</code></li>
    <li><strong>Descrição:</strong> Deleta um usuário pelo ID.</li>
    <li><strong>Resposta:</strong></li>
    <pre><code>{
  "message": "Usuário deletado com sucesso"
}</code></pre>
</ul>

<h2 id="exemplos-de-código">Exemplos de Código</h2>

<p>Aqui está um exemplo de como você pode usar o <code>curl</code> para interagir com a API:</p>

<ul>
  
   app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data:{
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    console.log(user)
    res.status(201).json(user)
})
</ul>

<h2 id="tecnologias-utilizadas">Tecnologias Utilizadas</h2>

<ul>
    <li><strong>Node.js</strong> - Ambiente de execução JavaScript.</li>
    <li><strong>Express</strong> - Framework para criação de servidores web.</li>
    <li><strong>MongoDB</strong> - Banco de dados NoSQL.</li>
    <li><strong>Mongoose</strong> - Biblioteca para modelar dados MongoDB com Node.js.</li>
</ul>

<h2 id="contribuindo">Contribuindo</h2>

<p>Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma <em>issue</em> ou enviar um <em>pull request</em>. Todas as contribuições são bem-vindas!</p>

<h2 id="licença">Licença</h2>

<p>Este projeto está licenciado sob a <a href="LICENSE">MIT License</a>.</p>
