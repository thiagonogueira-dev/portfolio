<template>
    <section class="projects" id="projetos">
        <SectionTitle title="PROJETOS"/>

        <Project name="Monty Hall" img="monty-hall.png" 
          summary="Site criado utilizando o framework <b>Vue.js</b> para demostrar o problema de Monty Hall.
          É possível escolher a quantidade de portas e a porta premiada."
          :technologies="['vuejs']" :haveWebSite="true"  webSite="https://monty-hall-vue-js.vercel.app/"
          repository="https://github.com/thiagonogueira-dev/monty-hall"/>

        <Project name="Games List" img="games-list.png"
          summary="Um sistema de cadastro de jogos feito utilizando <b>Spring Boot</b>, um framework do <b>Java</b>,
            onde é possível organizar os jogos por categoria e ordená-los de acordo com a vontade do usuário. O frontend foi
            feito utilizando a biblioteca <b>jQuery UI</b>."  
          :technologies="['java']" :haveWebSite="false" 
          repository="https://github.com/thiagonogueira-dev/games-list"/>
        
        <Project name="Galeria" img="galeria.png" 
          summary="Galeria de fotos feita com <b>Bootstrap</b> e <b>jQuery</b>."
          :technologies="['js', 'bootstrap']" :haveWebSite="true"  webSite="https://galeria-alpha.vercel.app/"
          repository="https://github.com/thiagonogueira-dev/galeria"/>

        <button class="btn-others" @click="showHiddenProjects()">Outros projetos...</button>

        <Project class="project-hidden d-none" name="Calculadora" img="calc.png"
          summary="Calculadora que realiza operações básicas feita utilizando <b>Vue.js</b>."  
          :technologies="['js', 'vuejs']" :haveWebSite="true" webSite="https://calculadora-vue-nu.vercel.app/"
          repository="https://github.com/thiagonogueira-dev/calculadora-vue"/>

        <Project class="project-hidden d-none" name="Flappy Bird" img="flappy.png"
          summary="Uma cópia simples do jogo Flappy Bird utilizando apenas <b>Html</b>, <b>CSS</b> e <b>JavaScript</b>."  
          :technologies="['html5', 'css3', 'js']" :haveWebSite="true" webSite="https://flappy-bird-xi-wheat.vercel.app/"
          repository="https://github.com/thiagonogueira-dev/flappy-bird"/>
      
    </section>
</template>

<script>
import SectionTitle from './SectionTitle';
import Project from './Project';

export default {
  name: "MyProjects",
  components: { SectionTitle, Project },
  methods: {
    showHiddenProjects() {
      
      const projsHidden = document.querySelectorAll('.project-hidden');
      for(let p of projsHidden) {
        document.querySelector('.btn-others').style.display = 'none';
        p.classList.remove('d-none');
        p.classList.add('fade-in');

      }
    }
  }
};
</script>

<style>
.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-others {
  width: 800px;
  background-color: var(--project-background);
  border: none;
  border-radius: 5px;
  padding: 3px 0px;
  font-size: 1.02rem;
}

.btn-others:hover {
  transform: scale(1.05);
}

.project-hidden {
    scale: 0;
    opacity: 0;
}

.fade-in {
    animation: 0.5s fadeIn forwards;
}

@keyframes fadeIn {
    to {
        scale: 1;
        opacity: 1;
    }
}

@media (max-width: 992px){
    .btn-others {
        width: 660px;
    }
}

@media (max-width: 768px) {
    .btn-others {
        width: 480px;
    }
}

@media (max-width: 576px) {
    .btn-others {
        width: 80%;
    }
}

</style>