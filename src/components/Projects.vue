<template>
    <section class="projects" id="projetos">
        <SectionTitle title="PROJETOS"/>
        <Project name="Flappy Bird" img="flappy.png"
          summary="Uma cópia simples do jogo Flappy Bird utilizando apenas <b>Html</b>, <b>CSS</b> e <b>JavaScript</b>."  
          :technologies="['html5', 'css3', 'js']" :haveWebSite="true"/>
        <Project name="Calculadora" img="calc.png"
          summary="Calculadora que realiza operações básicas feita utilizando <b>Vue.js</b>."  
          :technologies="['js', 'vuejs']" :haveWebSite="true"/>
        <Project name="Games List" img="flappy.png"
          summary="Um sistema de cadastro de jogos feito utilizando <b>Spring Boot</b>, um framework do <b>Java</b>,
            onde é possível organizar os jogos por categoria e ordená-los de acordo com a vontade do usuário. O frontend foi
            feito utilizando a biblioteca <b>jQuery UI</b>."  
          :technologies="['java']" :haveWebSite="false"/>
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

</style>