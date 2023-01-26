<template>
  <v-app style="background-color: hwb(214deg 52% 46%);">
    <v-app-bar
      app
      color="black"
      dark
    >
    <span class="mr-2">NAVEGADOR GITHUB</span>
    
    </v-app-bar>

    <v-main>
      <GithubVuewer/>
    </v-main>
  </v-app>
</template>

<script>
import GithubVuewer from './components/GithubVuewer';

export default {
  name: 'App',

  components: {
    GithubVuewer,
  },

  data: () => ({
    //
  }),
};
</script>
