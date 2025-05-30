# Giphy Explorer

Este é um projeto de teste técnico desenvolvido para a SGBR® Sistemas.

## Descrição

Uma aplicação web front-end que permite aos usuários explorar GIFs do GIPHY, pesquisar por termos, favoritar GIFs e navegar por categorias. Os GIFs favoritados são persistidos localmente no navegador.

## Tecnologias Utilizadas

* **Quasar Framework 2.x**
* **Vue.js 3** (Composition API com `<script setup>`)
* **Vue Router**
* **Pinia** para gerenciamento de estado
* **Axios** para requisições HTTP
* **LocalStorage** (via plugin do Quasar) para persistência de favoritos
* **Tailwind CSS** para estilização
* **GIPHY API**

## Funcionalidades

* Visualização de GIFs em tendência na página inicial.
* Barra de busca para encontrar GIFs específicos.
* Funcionalidade de favoritar/desfavoritar GIFs, com persistência local.
* Página de favoritos para visualizar todos os GIFs salvos.
* Página de categorias para explorar GIFs por diferentes temas.
* Layout responsivo.

## Como Instalar e Executar

**Pré-requisitos:**

* Node.js (versão 18.x ou superior recomendada)
* npm ou Yarn

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/caiojpacheco/Giphy-Explorer.git
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd giphy-explorer
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn
    ```
4.  **Configurar Chave da API GIPHY:**
    * Obtenha uma chave de API gratuita do GIPHY em [https://developers.giphy.com/dashboard/](https://developers.giphy.com/dashboard/).
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Adicione sua chave de API a este arquivo no formato:
        ```
        VITE_GIPHY_API_KEY=SUA_CHAVE_API_AQUI
        ```
        **ATENÇÃO:** Não compartilhe este arquivo `.env` em repositórios públicos. Ele já está configurado para ser ignorado pelo Git.

5.  **Execute a aplicação em modo de desenvolvimento:**
    ```bash
    quasar dev
    ```
    A aplicação será aberta no seu navegador padrão (geralmente em `http://localhost:9000`).

## Autor

Caio J Pacheco
caiojunqueirapacheco@gmail.com

## Considerações Finais

Este projeto demonstra a integração das tecnologias mencionadas para criar uma experiência de usuário interativa e persistente.
