<template>

    <Header />
    <main>
      <router-view/>
    </main>
    <Footer />

</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";

  export default {
    components: {
      Header,
      Footer
    },
  }
</script>


