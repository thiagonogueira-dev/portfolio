<template>
    <div id="app">
        <NavBar />
        <Main />
    </div>
</template>

<script>
import NavBar from './components/NavBar';
import Main from './components/Main';

export default {
    name: 'App',
    components: { NavBar, Main }
}
</script>

<style>
:root {
    --detail-blue: #33CCCC;
    --background-color: #D9D9D9;
}

body {
    background-color: var(--background-color) !important;
}
</style>