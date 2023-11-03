<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
export default {
    name: "App",
    created() {
        let token = localStorage.getItem("token");
        if (token != "" && token != null && token != undefined) {
            console.log(token);
            this.$store.commit("saveToken", token);
        }
    },
};
</script>
