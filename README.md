# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# Conexões Solidárias 

## Integrantes: <a href="https://www.linkedin.com/in/emillydepine/">Emilly Depine</a>, <a href="https://www.linkedin.com/in/fernando-jos%C3%A9-dos-santos-a7a449135/">Fernando José</a>, <a href="https://www.linkedin.com/in/kau%C3%A3-silva-rocha-0a2b0a1a5/">Kauã Torres</a> e <a href="https://www.linkedin.com/in/sergio-pedote/">Sergio Pedote</a>.

## Professores Orientadores: <a href="https://www.linkedin.com/in/victorbarq/">Victor Rosetti</a>, <a href="https://www.linkedin.com/in/eduardo-savino-gomes-77833a10/">Eduardo Savino</a>, <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a>, <a href="https://www.linkedin.com/in/aimarlopes/">Aimar Martins</a> e <a href="https://www.linkedin.com/in/jbuesso/">José Buesso</a>.

## Descrição

<p align="center">
<img src=""C:\Users\I584966\Downloads\maos-que-ligam-logotipo_23-2147507857.jpg"" alt="Conexões Solidárias" border="0">
  Game by <a href="http://www.nyphotographic.com/">Nick Youngson</a> <a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a> <a href="http://pix4free.org/">Pix4free</a>
</p>

<br><br>
Nosso site foi desenvolvido com o propósito de ampliar a divulgação das ONGs, proporcionando-lhes maior visibilidade e reconhecimento. Além disso, buscamos conectar voluntários às causas com as quais se identificam, facilitando a descoberta das melhores oportunidades de voluntariado para cada pessoa. Nosso objetivo é ajudar cada pessoa a contribuir para a construção de um mundo melhor.
<br><br>

## 🛠 Estrutura de pastas

-Raiz<br>
|<br>

|-->documentos<br>
  &emsp;|-->antigos<br>
  &emsp;|Placeholder.txt<br>
  &emsp;|Requisitos de Modelagem de Software e Arquitetura de Sistemas.docx<br>
  &emsp;|Template_-_Projetos_de_Extensão.docx<br>
  
|-->executáveis<br>
  &emsp;|-->windows<br>
  &emsp;|-->android<br>
  &emsp;|-->HTML<br>
  
|-->imagens<br>
  &emsp;|-->Bootstrap_5.0_Screenshot.png<br>

|-->src<br>
  &emsp;|-->Backend<br>
  &emsp;|Colocar os códigos do Backend Aqui.txt<br>
  &emsp;|DiagramaModeloBD.png<br>
  &emsp;|ProjetoBD.sql<br>
  
  &emsp;|-->Frontend<br>
  &emsp;|Colocar os códigos do Frontend Aqui.txt<br>
  
|readme.md<br>

A pasta raiz contem dois arquivos que devem ser alterados:

<b>README.MD</b>: Arquivo que serve como guia e explicação geral sobre seu projeto. O mesmo que você está lendo agora.

Há também 4 pastas que seguem da seguinte forma:

<b>documentos</b>: Toda a documentação estará nesta pasta.

<b>executáveis</b>: Binários e executáveis do projeto devem estar nesta pasta.

<b>imagens</b>: Imagens do sistema

<b>src</b>: Pasta que contém o código fonte.

## 🛠 Instalação

<b>Windows:</b>

Não há instalação! Apenas executável!
Encontre o JOGO.exe na pasta executáveis e execute-o como qualquer outro programa.

<b>HTML:</b>

Não há instalação!
Encontre o index.html na pasta executáveis e execute-o como uma página WEB (através de algum browser).

## 💻 Configuração para Desenvolvimento

Descreva como instalar todas as dependências para desenvolvimento e como rodar um test-suite automatizado de algum tipo. Se necessário, faça isso para múltiplas plataformas.
Configuração para Desenvolvimento

Esta seção fornece instruções detalhadas sobre como configurar o ambiente de desenvolvimento para o sistema Conexão Solidária, incluindo a instalação de dependências e a execução de testes automatizados. As instruções são fornecidas para múltiplas plataformas: Windows, macOS e Linux.

Requisitos de Sistema
Node.js (versão 14 ou superior)
npm (versão 6 ou superior) ou Yarn (opcional)
Banco de Dados MySQL (versão 5.7 ou superior) ou PostgreSQL (versão 12 ou superior)
Git
Passo a Passo para Configuração
1. Clonar o Repositório
Primeiro, clone o repositório do projeto:

bash
Copiar código
git clone https://github.com/username/conexao-solidaria.git
cd conexao-solidaria
2. Instalar Node.js e npm
Windows
Baixe e instale o Node.js do site oficial.

Verifique a instalação:

bash
Copiar código
node -v
npm -v
macOS
Use Homebrew para instalar o Node.js:

bash
Copiar código
brew install node
Verifique a instalação:

bash
Copiar código
node -v
npm -v
Linux
Instale Node.js via gerenciador de pacotes. Exemplo para distribuições baseadas no Debian:

bash
Copiar código
sudo apt update
sudo apt install nodejs npm
Verifique a instalação:

bash
Copiar código
node -v
npm -v
3. Instalar Dependências do Projeto
No diretório do projeto, execute:

bash
Copiar código
npm install
ou, se estiver usando Yarn:

bash
Copiar código
yarn install
4. Configurar o Banco de Dados
MySQL
Instale o MySQL.

Crie um banco de dados para o projeto:

sql
Copiar código
CREATE DATABASE conexao_solidaria;
Atualize o arquivo de configuração .env com as credenciais do banco de dados:

ini
Copiar código
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=conexao_solidaria
PostgreSQL
Instale o PostgreSQL.

Crie um banco de dados para o projeto:

sql
Copiar código
CREATE DATABASE conexao_solidaria;
Atualize o arquivo de configuração .env com as credenciais do banco de dados:

ini
Copiar código
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=conexao_solidaria
5. Executar Migrações do Banco de Dados
Depois de configurar o banco de dados, execute as migrações para criar as tabelas necessárias:

bash
Copiar código
npx sequelize-cli db:migrate
6. Executar o Servidor de Desenvolvimento
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm start
ou, se estiver usando Yarn:

bash
Copiar código
yarn start
A aplicação estará disponível em http://localhost:3000.

Executar Testes Automatizados
Configuração de Testes
Este projeto utiliza o Jest para testes automatizados. Certifique-se de que todas as dependências de desenvolvimento estejam instaladas:

bash
Copiar código
npm install --save-dev jest
ou, se estiver usando Yarn:

bash
Copiar código
yarn add --dev jest
Executar Testes
Para rodar os testes, use o comando:

bash
Copiar código
npm test
ou, se estiver usando Yarn:

bash
Copiar código
yarn test
Executar Testes com Cobertura
Para gerar um relatório de cobertura de testes:

bash
Copiar código
npm test -- --coverage
ou, se estiver usando Yarn:

bash
Copiar código
yarn test --coverage

Para abrir este projeto você necessita das seguintes ferramentas:

-<a href="https://code.visualstudio.com/download">Visual Studio Code</a>
-<a href="https://nodejs.org/en/download/package-manager/current">Node.js</a>

## 🗃 Histórico de lançamentos

A cada atualização os detalhes devem ser lançados aqui.

* 0.2.1 - 25/01/2022
    * MUDANÇA: Atualização de docs (código do módulo permanece inalterado)
* 0.3.0 - 15/01/2022
    * Troca total do HTML e CSS para React
    * 
* 0.2.0 - 11/01/2022
    * Desenvolvimento do CSS e HTML
    * Sites montados
* 0.1.1 - 24/02/2024
    * Escolha das cores que serão utilizadas no site
    * Definição do Tema do Site
* 0.0.1 - 14/02/2024
    * Trabalho em andamento

## 📋 Licença/License

Conexões Solidárias © 2024 by Sérgio Pedote, Fernando José, Kauã Torres, Emilly Depine is licensed under CC BY 4.0 

## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. https://learn.microsoft.com/pt-br/
2. 
3. 
4. 
[Licença CC 0.](https://chooser-beta.creativecommons.org/)
