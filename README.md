# CRUD-React-NodeJs

Esta é uma aplicação de CRUD (Create, Read, Update, Delete) construída com React e Node.js, que utiliza o DynamoDB como banco de dados e está organizado como um monorepo.

Um monorepo é uma estrutura de repositório que permite que vários projetos relacionados sejam mantidos em um único repositório. Isso pode facilitar a manutenção e o desenvolvimento de projetos em equipe, pois todas as dependências e configurações ficam em um único local.

A ideia da aplicação de CRUD é permitir ao usuário realizar operações básicas de gerenciamento de dados, como adicionar novos itens, exibir uma lista de itens existentes, atualizar informações de um item específico e remover um item da lista.

O projeto é dividido em duas partes: a API (que fica na pasta "api") e a interface web (que fica na pasta "web"). A API é responsável por gerenciar os dados da aplicação, enquanto a interface web é responsável por exibir os dados para o usuário e permitir que ele realize as operações de CRUD.

A API é construída com o Node.js e utiliza o framework Express para lidar com as requisições HTTP. Ela também utiliza o DynamoDB como banco de dados para armazenar os dados da aplicação. O DynamoDB é um serviço de banco de dados NoSQL da Amazon Web Services (AWS) que oferece alta escalabilidade, desempenho e disponibilidade. A interface web é construída com o React e se comunica com a API através de requisições HTTP para realizar as operações de CRUD.
