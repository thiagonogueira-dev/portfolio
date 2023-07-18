<template>
    <div class="project">
        <h3>{{ name }}</h3>
        <img :src="imageSrc" alt="">
        <p v-html="summary"></p>
        <div class="technologies">
            <font-awesome-icon v-for="tech in technologies" :key="tech" :icon="['fab', tech]" size="2x"/>
        </div>
        <hr>
        <div class="info-proj">
            <a href="#" target="_blank" v-if="haveWebSite"><font-awesome-icon :icon="['far', 'eye']" size="2x"/></a>
            <a href="#" target="_blank"><font-awesome-icon :icon="['fas', 'code']" size="2x" /></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyProject',
    props: { 
        name: {},
        arquive: { type: String },
        summary: {},
        technologies: { type: Array },
        haveWebSite: { type: Boolean}
    },
    data: function(){
        return{
            imageSrc: null
        }
    },
    mounted(){
        this.imageSrc = require(`/static/assets/${this.arquive}`);
    }
}
</script>

<style>
.project {
    width: 850px;
    background-color: var(--project-background);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
}

.project h3, .project img, .project p{
    margin-bottom: 15px;
}

.project img{
    width: 460px;
    height: 315px;
}

.technologies {
    display: flex;
    width: 450px;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.project hr {
    width: calc(100% - 20px);
}

.info-proj{
    width: 170px;
    
    display: flex;
    align-self: flex-start;
    margin-left: 10px;
    margin-top: 5px;
    justify-content: space-around;
}

.info-proj a{
    padding: 7px;
    border-radius: 30px;
    border: 1px solid black;
    align-self: center;
}

.info-proj a:hover{
    transform: scale(1.05);
}
</style>