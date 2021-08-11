<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: rgba(0, 0, 0, 0.2)">
      <q-toolbar>
        <q-toolbar-title>
          Movie Stamp
        </q-toolbar-title>

        <q-btn stretch flat label="Películas" to="movies"/>

        <q-separator vertical />

        <q-btn stretch flat label="Series" />

        <q-separator vertical />

        <q-btn stretch flat label="Programas" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-card class="q-pa-lg my-card text-white" style="background-color: rgba(0, 0, 0, 0.1)" flat>
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h3 text-bold ellipsis">
              {{ movieTitle }}
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" readonly/>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Acción・Aventura・Fantasía
          </div>
          <div class="text-caption text-white">
            {{ description }}
          </div>
        </q-card-section>

        <q-separator />
      </q-card>

      <q-scroll-area
        horizontal
        infinite
        style="height: 310px; min-width:320px;"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        class="q-pa-md"
      >
        <div class="row no-wrap">
          <div
            v-for="(movie, index) in movies"
            :key="index"
          >
            <div class="q-pa-sm items-center q-gutter-md">
              <q-card class="my-card text-white" style="background-color: rgba(0, 0, 0, 0)" flat>
                <q-card-section>
                  <q-avatar
                    size="150px"
                    class="q-pl-sm"
                    rounded
                  >
                    <img :src="movie.cover">
                  </q-avatar>
                  <div class="text-subtitle1" style="text-align: center">{{ movie.name }}</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </q-scroll-area>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      barStyle: {
        right: '2px',
        borderRadius: '1px',
        backgroundColor: 'rgb(2, 123, 227, 0)',
        width: '1px',
        opacity: 0.2
      },
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: 'rgb(2, 123, 227, 0)',
        width: '5px',
        opacity: 0.75
      },
      // No encontré una api chévere de películas para cargar datos distintos a éstos
      movies: [
        {
          cover: 'https://images4.alphacoders.com/587/587508.png',
          name: 'movie name',
          description: 'movie description',
          stars: 1
        },
        {
          cover: 'https://images4.alphacoders.com/587/587508.png',
          name: 'movie name',
          description: 'movie description',
          stars: 1
        },
        {
          cover: 'https://images4.alphacoders.com/587/587508.png',
          name: 'movie name',
          description: 'movie description',
          stars: 1
        },
        {
          cover: 'https://images4.alphacoders.com/587/587508.png',
          name: 'movie name',
          description: 'movie description',
          stars: 1
        },
        {
          cover: 'https://images4.alphacoders.com/587/587508.png',
          name: 'movie name',
          description: 'movie description',
          stars: 1
        },
        {
          cover: 'https://images4.alphacoders.com/587/587508.png',
          name: 'movie name',
          description: 'movie description',
          stars: 1
        },
        {
          cover: 'https://images4.alphacoders.com/587/587508.png',
          name: 'movie name',
          description: 'movie description',
          stars: 1
        },
        {
          cover: 'https://images4.alphacoders.com/587/587508.png',
          name: 'movie name',
          description: 'movie description',
          stars: 1
        }
      ],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.',
      stars: 4,
      movieTitle: 'The Witcher'
    }
  }
}
</script>
<style>
body {
 background-image: url("https://images4.alphacoders.com/587/587508.png");
 background-color: #cccccc;
}
.my-card {
  width: 100%;
  max-width: 360px
}
</style>
