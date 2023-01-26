<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected"/>
    <GithubIssues :repo="repo"/>
    <GithubContents :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import GithubIssues from './GithubIssues';
  import GithubContents from './GithubContents';
  export default {
    components: {
      GithubRepo,
      GithubIssues,
      GithubContents,
    },
    data: () => ({
      repo: null
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      }
    }
  }
</script>
