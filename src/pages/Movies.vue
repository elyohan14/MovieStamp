<template>
  <q-page class="bg-white">
     <q-table
      title="Películas"
      :data="data"
      :columns="columns"
      row-key="name">
     <template v-slot:top>
       <div class="row">
          <q-btn color="primary" icon="add" label="Añadir" @click="modalAdd = true" rounded/>
       </div>
      </template>
     </q-table>
     <q-dialog v-model="modalAdd">
       <q-card class="q-pa-md" style="width: 420px">
         <div class="col text-h6 text-bold ellipsis">
            Añadir película
          </div>
          <div class="row">
            <div class="col-md-12 q-pb-sm">
              <label for="">Nombre</label>
              <q-input outlined v-model="form.name" dense/>
            </div>
            <div class="col-md-12 q-pb-sm">
              <label for="">Descripción</label>
              <q-input type="textarea" outlined v-model="form.name" dense/>
            </div>
            <div class="col-md-3 q-pr-xs q-pb-sm">
              <label for="">Calificación</label>
              <q-input outlined v-model="form.name" dense/>
            </div>
            <div class="col-md-9 q-pl-xs">
              <label for="">Categoría</label>
              <q-input outlined v-model="form.name" dense/>
            </div>
            <div class="col-md-5 q-pr-xs">
              <label for="">Carátula Url</label>
              <q-input outlined v-model="form.name" dense/>
            </div>
            <div class="col-md-7 q-pl-xs">
              <label for="">Portada Url</label>
              <q-input outlined v-model="form.name" dense/>
            </div>
          </div>
          <q-card-actions align="right">
            <q-btn flat label="Cancelar" color="primary" v-close-popup />
            <q-btn flat label="Añadir" color="primary" @click="save" v-close-popup />
          </q-card-actions>
       </q-card>
     </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      modalAdd: false,
      form: {},
      columns: [
        {
          name: 'name',
          label: 'Nombre',
          align: 'left',
          field: 'title'
        },
        {
          name: 'albumId',
          label: 'Calificación',
          align: 'left',
          field: 'albumId'
        },
        {
          name: 'category',
          label: 'Categoría',
          align: 'left',
          field: 'title'
        },
        {
          name: 'title',
          label: 'Descripción',
          align: 'left',
          field: 'title'
        },
        {
          name: 'thumbnailUrl',
          label: 'Carátula',
          align: 'left',
          field: 'thumbnailUrl'
        },
        {
          name: 'url',
          label: 'Portada',
          align: 'left',
          field: 'url'
        }
      ],
      data: []
    }
  },
  mounted () {
    this.getMovies()
  },
  methods: {
    getMovies () {
      this.$q.loading.show()
      this.$api.get('photos').then(res => {
        this.data = res.data
        this.$q.loading.hide()
      })
    },
    save () {
      // No guarda realmente pero así sería con una api real
      this.$api.post('photos', this.form).then(res => {
        if (res) {
          this.$q.notify({
            type: 'positive',
            message: 'Listo'
          })
        }
      })
    }
  }
}
</script>
<style>
.row, .column, .flex {
  align-self: flex-end;
}
</style>
