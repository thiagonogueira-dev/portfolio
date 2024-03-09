<template>
    <main class="main">
        <Apresentation />
        <Projects />
        <Technologies :technologiesFaB="['js', 'node' , 'java', 'php', 'git',
            'github', 'aws', 'linux']" :technologiesFaS="['database']"/>
    </main>
</template>

<script>
import Apresentation from './Apresentation';
import Projects from './Projects';
import Technologies from './Technologies';

export default {
    name: 'MyMain',
    components: { Apresentation, Projects, Technologies }
}
</script>

<style>
.main, .technologies, .project {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.main {
    justify-content: center;
    margin-top: 90px;
}

.container-main {
    width: 850px;
    background-color: var(--project-background);
    border-radius: 5px;
    margin: 20px 0px;
}

@media (max-width: 992px){
    .container-main {
        width: 700px;
    }
}

@media (max-width: 768px) {
    .container-main {
        width: 515px;
    }
}

@media (max-width: 576px) {
    .container-main {
        width: 90%;
    }
}
</style>