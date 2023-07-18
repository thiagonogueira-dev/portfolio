<template>
    <main class="main">
        <Apresentation />
        <Projects />
    </main>
</template>

<script>
import Apresentation from './Apresentation';
import Projects from './Projects';

export default {
    name: 'MyMain',
    components: { Apresentation, Projects }
}
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
}
</style>