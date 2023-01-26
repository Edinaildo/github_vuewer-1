<template>
    <div>
      <v-row>
        <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Tipo de arquivo</th>
                    <th class="text-left">Nome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="arquivo in arquivos " :key="arquivo.name">
                    <td>{{ arquivo.type }}</td>
                    <td v-if="arquivo.type='dir'"><p @click="listaArquivosCompletos(arquivo.path)">{{ arquivo.name }}</p></td>
                    <td v-else >{{ arquivo.name }}</td>
                  </tr>
                </tbody>
              </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
          <v-btn color="primary" v-if="temmais" @click="listaArquivos(caminho)">MAIS</v-btn>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  
    import {api} from '~api'
  
    export default {
      props: ['repo', 'user'],
      data: () => ({
        arquivos: [],
        loading: false,
        temmais: false,
        currentPage: 1,
        repositorioPath: [],
        path: null,
      }),
      methods: {
        async listaArquivos(caminho){
          this.loading = true
          const maisarquivos = await api.listaArquivos(this.repo.owner.login, this.repo.name, caminho)
          this.arquivos = maisarquivos
          this.loading = false
          console.log(maisarquivos)
        },
        async listaArquivosCompletos(caminho) {
          if (this.repositorioPath.length > 2) {
            this.repositorioPath.pop()
          }
          this.reposiorioPath.push(caminho)
          this.path = this.repositorioPath.join('/')
          this.listaArquivos(caminho)
        },
      },
      watch: {
        user() {
          this.repositorioPath = []
          if(this.user) {
            console.log(this.user)
            this.repositorioPath.push(this.user)
            this.path = this.repositorioPath.join('/')
          }
        },
        repo(){
          this.arquivos = []
          this.repositorioPath = [this.repositorioPath[0]]
          if (this.repo) {
            console.log(this.repo.name)
            this.path = this.repositorioPath.join('/')
            this.listaArquivos()
          } else {
            this.arquivos = []
          }
        }
      }
    }
  </script>
  