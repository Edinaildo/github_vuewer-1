<template>
  <v-container>
    <GithubRepo @userselected="onUserSelected" @reposelected="onRepoSelected"/>
    <!-- <GithubIssues :repo="repo"/> -->
    <GithubContents :user="user" :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import GithubIssues from './GithubIssues';
  import GithubContents from './GithubContents';
  export default {
    components: {
      GithubRepo,
      // GithubIssues,
      GithubContents,
    },
    data: () => ({
      repo: null,
      path: null,
      user: null
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      },
      onUserSelected(user){
        this.user = user
      }
    }
  }
</script>
