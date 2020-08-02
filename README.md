## HackGif

Este projeto consiste em listar os Melhores Gifs de hackes da internet, para isto foi utilizado as seguintes tecnologias: React Native para desenvolver a parte mobile, utilizando typescript e para estilização a lib styleds-components, para requisição http foi utilizado o axios.

O aplicativo consome os gis de uma api desenvolvida com Django Rest, possui a opção de pull to refresh e paginação com infinit scoll, tem as opões de votar up e votar down em cada gif, sendo atualizado no servidor e a lista em tempo real.

### Instalação

Necessário [Node.js](https://nodejs.org/) v10+ e [Yarn](https://classic.yarnpkg.com/pt-BR/) ou npm (instaldo juntamente com Node.js) para rodar.

### Dependencias

```sh
cd hackgif
```

```sh
yarn
```

### rodar em emulador ou celular android em desenvolvimento

```sh
yarn android
```
