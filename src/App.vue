<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  background: url("/assets/fondo.jpg") no-repeat center center fixed;
  background-size: cover;
  color: white;
}
</style>
