# Restaurante API
<div align="center">
  <img src="https://user-images.githubusercontent.com/93675800/159186876-578532be-1065-4337-8b67-9c14f6e55eef.jpg">
</div>
<br><br>

<h2>Descrição do projeto:</h2>
<p>
  Se trata do desenvolvimento de uma API REST com a temática de restaurante, voltado à administração dos ingredientes usados nesse mesmo restaurante, que utiliza o padrão MVC (Model, View e Controller), assim como as operações do CRUD (Create, Read, Update, Delete), os verbos
  HTTP e o padrão DAO (Data Access Object).
</p>

<h2>Ferramentas utilizadas no projeto:</h2>
<ul>
  <li><strong>Visual Studio Code</strong> - um editor de código-fonte, você pode baixá-lo <a href="https://code.visualstudio.com/">aqui</a>.</li>
  <li><strong>Node.js</strong> - é um software de código aberto e multiplataforma que permite a execução de códigos JavaScript fora de um navegador web, você pode baixá-lo <a href="https://nodejs.org/en/">aqui</a>. Recomendo que baixe uma versão estável ("Recommended For Most Users") ou a versão 16.14.0, pois essa foi a utilizada no projeto.</li>
  <li><strong>Insomnia</strong> - é um API Client para suas APIs GraphQL e REST, você pode baixá-lo <a href="https://insomnia.rest/download">aqui</a>.</li>
</ul>

<h2>Como testar a conexão do VS Code com o Node.js:</h2>
<div>
  <p>
    Para testar a conexão do VS Code com o Node.js é preciso que os seguintes passos sejam seguidos:
    <ul>
      <li><h4>Abra o seu VS Code.</h4></li>
      <li><h4>Na página de apresentação/inicialização do programa utilize as teclas de atalho "Ctrl + j" para abrir o terminal.</h4></li>
      <li>
        <h4>No terminal digite o comando:</h4>
        <blockquote>
          node --version
        </blockquote>
      </li>
    </ul>
    <p>
      Após esses passos é esperado que no terminal apareça a versão do Node.js que está instalado em seu computador:<br>
    </p>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/93675800/159189242-4b250d74-d25e-4ed1-80f8-54be1483196c.jpg">
    </div>
  </p>
</div>

<h2>Como executar o projeto:</h2>
<ul>
  <li>
    <h4>Faça um clone desse projeto com o seguinte comando em seu terminal:</h4>
    <blockquote>
      git clone <a textDecoration="none">https://github.com/LagAntunes/Projeto-de-conclusao-do-modulo-4-Restaurante-API.git</a>
    </blockquote>
  </li>
  <li>
    <h4>Verifique a instalação do NPM (um gerenciador de pacotes para o Node.JS que geralmente já vem instalado junto com o Node.js) em seu computador com o seguinte comando em seu terminal:</h4>
    <blockquote>
      npm --version
    </blockquote>
    <p>É esperado que a versão do NPM apareça na mensagem do terminal:</p>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/93675800/159192071-1810483e-45d1-4915-8b0d-c94eed4836db.jpg">
    </div>
  </li>
  <li><h4>Instale as dependências especificadas no próximo tópico.</h4></li>
  <li>
    <h4>Inicialize o projeto com o seguinte comando no terminal:</h4>
    <blockquote>
      npm run dev
    </blockquote>
  </li>
</ul>

<h2>Dependências necessárias ao projeto:</h2>
<blockquote>
   "dependencies": {<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"express": "^4.17.3",<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"nodemon": "^2.0.15",<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sqlite": "^4.0.25",<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sqlite3": "^5.0.2"<br>
  }
</blockquote>
<h3>A documentação para a instalação das dependências estão abaixo:</h3>
<ul>
  <li>
    Documentação do <a href="https://www.npmjs.com/package/express">Express</a>
    <h5>Digite o comando abaixo no terminal do VS Code para instalar o Express:</h5>
    <blockquote>
      npm install express
    </blockquote>
  </li>
  <li>
    Documentação do <a href="https://www.npmjs.com/package/nodemon">Nodemon</a>
    <h5>Digite o comando abaixo no terminal do VS Code para instalar o Nodemon:</h5>
    <blockquote>
      npm install -g nodemon
    </blockquote>
  </li>
  <li>
    Documentação do <a href="https://www.npmjs.com/package/sqlite">Sqlite e Sqlite3</a>
    <h5>Digite os comandos abaixo no terminal do VS Code para instalar o Sqlite e Sqlite3:</h5>
    <blockquote>
      npm install sqlite --save<br>
      npm install sqlite3 --save
    </blockquote>
  </li>
</ul>

<h2>Rotas da API:</h2>
<p>Nesse projeto utilizamos somentes as rotas: <strong>/ingredientes</strong> e <strong>/ingredientes/:id</strong>, mas é possível realizar todos as operações do CRUD com elas. </p>
<p><strong>***Observação:</strong> Para um teste mais dinâmico considere utilizar o Insomnia para testar as rotas da API.</p>

<ul>
  <li>
    <h3>Para conferir todos os ingredientes cadastrados:</h3>
    <p>É utilizado o método HTTP Get no seguinte caminho: <a textDecoration="none">http://localhost:3000/ingredientes</a></p>
  </li>
  <li>
    <h3>Para conferir apenas um ingrediente específico cadastrado:</h3>
    <p>É utilizado o método HTTP Get no seguinte caminho: <a textDecoration="none">http://localhost:3000/ingredientes/1</a>. Onde esse "1" representa o ingrediente cadastrado com o id igual a 1.</p>
  </li>
  <li>
    <h3>Para cadastrar um novo ingrediente:</h3>
    <p>É utilizado o método HTTP Post no seguinte caminho: <a textDecoration="none">http://localhost:3000/ingredientes</a></p>
  </li>
  <li>
    <h3>Para alterar um ingrediente:</h3>
    <p>É utilizado o método HTTP Put no seguinte caminho: <a textDecoration="none">http://localhost:3000/ingredientes/1</a>. Onde esse "1" será o responsável por identificar o id e fazer a alteração no item cujo id é igual.</p>
  </li>
  <li>
    <h3>Para deletar um ingrediente:</h3>
    <p>É utilizado o método HTTP Delete no seguinte caminho: <a textDecoration="none">http://localhost:3000/ingredientes/1</a>. Onde esse "1" será o responsável por identificar o id e deletar da tabela o item cujo id é igual.</p>
  </li>
</ul>
