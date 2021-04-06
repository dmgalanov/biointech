<template>
  <MainContainer>
    <div>
      <Navigation />
      <router-view/>
    </div>
  </MainContainer>
</template>

<script>
  import MainContainer from "../components/MainContainer";
  import Navigation from "./navigation/Navigation";
  export default{
    name: 'Company',
    components: {
      MainContainer,
      Navigation,
    },
  }
</script>
