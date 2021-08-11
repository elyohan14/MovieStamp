<template>
  <q-page class="bg-white">
     <q-table
      title="Películas"
      :data="data"
      :columns="columns"
      row-key="name">
     <template v-slot:top>
       <div class="row">
          <q-btn color="primary" icon="add" label="Añadir" rounded/>
       </div>
      </template>
     </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'name',
          label: 'Nombre',
          align: 'left',
          field: 'name'
        },
        {
          name: 'rating',
          label: 'Calificación',
          align: 'left',
          field: 'rating'
        },
        {
          name: 'category',
          label: 'Categoría',
          align: 'left',
          field: 'category'
        },
        {
          name: 'description',
          label: 'Descripción',
          align: 'left',
          field: 'description'
        },
        {
          name: 'cover',
          label: 'Carátula',
          align: 'left',
          field: 'cover'
        },
        {
          name: 'cover_page',
          label: 'Portada',
          align: 'left',
          field: 'cover_page'
        }
      ],
      data: [
        {
          name: 'Frozen',
          rating: 4,
          category: 'Ficción',
          description: 'Disney',
          cover: 'https://url.image.com/image.jpeg1',
          cover_page: 'https://url.image.com/image.jpeg1'
        },
        {
          name: 'Frozen',
          rating: 4,
          category: 'Ficción',
          description: 'Disney',
          cover: 'https://url.image.com/image.jpeg1',
          cover_page: 'https://url.image.com/image.jpeg1'
        },
        {
          name: 'Frozen',
          rating: 4,
          category: 'Ficción',
          description: 'Disney',
          cover: 'https://url.image.com/image.jpeg1',
          cover_page: 'https://url.image.com/image.jpeg1'
        },
        {
          name: 'Frozen',
          rating: 4,
          category: 'Ficción',
          description: 'Disney',
          cover: 'https://url.image.com/image.jpeg1',
          cover_page: 'https://url.image.com/image.jpeg1'
        },
        {
          name: 'Frozen',
          rating: 4,
          category: 'Ficción',
          description: 'Disney',
          cover: 'https://url.image.com/image.jpeg1',
          cover_page: 'https://url.image.com/image.jpeg1'
        },
        {
          name: 'Frozen',
          rating: 4,
          category: 'Ficción',
          description: 'Disney',
          cover: 'https://url.image.com/image.jpeg1',
          cover_page: 'https://url.image.com/image.jpeg1'
        },
        {
          name: 'Frozen',
          rating: 4,
          category: 'Ficción',
          description: 'Disney',
          cover: 'https://url.image.com/image.jpeg1',
          cover_page: 'https://url.image.com/image.jpeg1'
        }
      ]
    }
  }
}
</script>
<style>
.row, .column, .flex {
  align-self: flex-end;
}
</style>
