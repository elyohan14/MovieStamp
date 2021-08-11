<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar style="background-color: #115794">
        <q-toolbar-title>
          Movie Stamp
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menú de opciones
        </q-item-label>
        <EssentialLink
          v-for="link in menu"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  components: { EssentialLink },
  data () {
    return {
      menu: [
        {
          title: 'Películas',
          icon: 'movie',
          link: 'movies'
        }
      ]
    }
  }
}
</script>
