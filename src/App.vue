<template>
    <div id="app">
        <NavBar />
        <Main />
        <Footer />
    </div>
</template>

<script>
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

export default {
    name: 'App',
    components: { NavBar, Main, Footer }
}
</script>

<style>
:root {
    --detail-blue: #1ED6EF;
    --background-color: #D9D9D9;
    --project-background: #F5F5F5;
}

body {
    background-color: var(--background-color) !important;
}

body a {
    text-decoration: none;
    color: black;
}

body img {
    -webkit-user-drag: none;
}
</style>