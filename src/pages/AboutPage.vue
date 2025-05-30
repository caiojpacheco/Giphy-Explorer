<template>
  <q-page class="q-pa-md">
    <h4 class="text-h4 q-mb-md">Sobre o Projeto Giphy Explorer</h4>

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Desenvolvido por: Caio Pacheco</div>
        <div class="text-subtitle1">Contato: caiojunqueirapacheco@gmail.com</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <p>Este projeto é uma aplicação web front-end desenvolvida como parte de um teste técnico para a SGBR® Sistemas.</p>
        <p>
          O objetivo principal é demonstrar habilidades em:
          <ul>
            <li>Desenvolvimento com **Quasar Framework (Vue 3, Composition API com `script setup`)**</li>
            <li>Gerenciamento de estado com **Pinia**</li>
            <li>Consumo de API RESTful com **Axios** (utilizando a API do GIPHY)</li>
            <li>Persistência de dados local com **LocalStorage** (para GIFs favoritos)</li>
            <li>Estilização com **Tailwind CSS**</li>
            <li>Organização de código e melhores práticas de desenvolvimento front-end.</li>
          </ul>
        </p>
        <p>
          A aplicação permite aos usuários:
          <ul>
            <li>Visualizar GIFs em tendência.</li>
            <li>Pesquisar por GIFs.</li>
            <li>Marcar GIFs como favoritos e visualizá-los em uma seção dedicada.</li>
            <li>Explorar GIFs por categorias.</li>
          </ul>
        </p>
        <p>Agradeço a oportunidade!</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>

</script>

<style scoped>
.my-card {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

li {
  margin-bottom: 5px;
}
</style>