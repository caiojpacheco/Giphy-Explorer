<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          v-if="!$q.screen.gt.md" flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <img src="~assets/logo.png" alt="SGBR Logo" style="height: 42px; vertical-align: middle;">
          <span class="q-ml-sm"></span>
        </q-toolbar-title>

        <div class="flex items-center">
          <span class="q-mr-sm">Caio Pacheco</span> <q-avatar icon="person" color="white" text-color="black" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="250"
      :breakpoint="992" class="bg-grey-10 text-black">
      <q-list>
        <q-item-label header class="text-white text-h6">
          Giphy Explorer
        </q-item-label>

        <q-item clickable v-ripple exact :to="{ name: 'home' }" class="nav-item" @click="closeDrawerOnMobile">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            Home
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple exact :to="{ name: 'favorites' }" class="nav-item" @click="closeDrawerOnMobile">
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>
          <q-item-section>
            Favoritos
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple exact :to="{ name: 'categories' }" class="nav-item" @click="closeDrawerOnMobile">
          <q-item-section avatar>
            <q-icon name="category" />
          </q-item-section>
          <q-item-section>
            Categorias
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple exact :to="{ name: 'about' }" class="nav-item" @click="closeDrawerOnMobile">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            Sobre
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// O leftDrawerOpen deve iniciar como true para que o show-if-above funcione
// e o drawer seja visível em telas maiores.
const leftDrawerOpen = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Fecha o drawer apenas se estiver em uma tela que o torne um overlay (menor que breakpoint 'lg')
function closeDrawerOnMobile() {
  if ($q.screen.lt.lg && leftDrawerOpen.value) {
    leftDrawerOpen.value = false;
  }
}
</script>

<style scoped>
/* Estilos específicos para este layout */

.nav-item {
  color: #0d6fdf; 
}

.nav-item .q-icon {
  color: #0d6fdf;
}

.nav-item.q-router-link--exact-active {
  background-color: rgba(33, 150, 243, 0.2);
  color: #0d6fdf;
  font-weight: bold;
}

.q-toolbar-title img {
  margin-right: 8px;
}
</style>