<template>
    <section class="projects" id="projetos">
        <SectionTitle title="PROJETOS"/>
        <Project name="Montty Hall" img="montty-hall.png" 
          summary="Site criado utilizando o framework <b>Vue.js</b> para demostrar o problema de Montty Hall.
          É possível escolher a quantidade de portas e a porta premiada."
          :technologies="['vuejs']" :haveWebSite="true"  webSite="https://montty-hall.vercel.app/"
          repository="https://github.com/thiagonogueira-dev/montty-hall"/>
        <Project name="Games List" img="games-list.png"
          summary="Um sistema de cadastro de jogos feito utilizando <b>Spring Boot</b>, um framework do <b>Java</b>,
            onde é possível organizar os jogos por categoria e ordená-los de acordo com a vontade do usuário. O frontend foi
            feito utilizando a biblioteca <b>jQuery UI</b>."  
          :technologies="['java']" :haveWebSite="false" 
          repository="https://github.com/thiagonogueira-dev/games-list"/>
        <Project name="Calculadora" img="calc.png"
          summary="Calculadora que realiza operações básicas feita utilizando <b>Vue.js</b>."  
          :technologies="['js', 'vuejs']" :haveWebSite="true" webSite="https://calculadora-vue-nu.vercel.app/"
          repository="https://github.com/thiagonogueira-dev/calculadora-vue"/>
        <!-- <Project name="Flappy Bird" img="flappy.png"
          summary="Uma cópia simples do jogo Flappy Bird utilizando apenas <b>Html</b>, <b>CSS</b> e <b>JavaScript</b>."  
          :technologies="['html5', 'css3', 'js']" :haveWebSite="true"/> -->
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