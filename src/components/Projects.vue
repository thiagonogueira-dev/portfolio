<template>
    <section class="projects">
        <SectionTitle title="PROJETOS"/>
        <Project name="Flappy Bird" arquive="flappy.png"
          summary="Uma cópia simples do jogo Flappy Bird utilizando apenas <b>Html</b>, <b>CSS</b> e <b>JavaScript</b>."  
          :technologies="['html5', 'css3', 'js']" :haveWebSite="true"/>
        <Project name="Calculadora" arquive="calc.png"
          summary="Calculadora que realiza operações básicas feita utilizando <b>Vue.js</b>."  
          :technologies="['js', 'vuejs']" :haveWebSite="true"/>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle';
import Project from './Project';

export default {
  name: "MyProjects",
  components: { SectionTitle, Project }
};
</script>

<style>
.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
    margin-top: 55px;
    width: 900px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0px 5px;
}

.title h2 {
    font-size: 1.9rem;
}

.title hr {
  width: 50%;
  border-width: 1.5px;
  border-color: var(--detail-blue);
}
</style>