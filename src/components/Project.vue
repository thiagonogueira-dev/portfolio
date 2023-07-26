<template>
    <div class="project container-main">
        <h3>{{ name }}</h3>
        <img :src="imageSrc" alt="">
        <p v-html="summary" class="summary"></p>
        <div class="technologies-proj">
            <font-awesome-icon class="icon" v-for="tech in technologies" :key="tech" :icon="['fab', tech]" 
                :title="capitalize(tech)" :class="tech"/>
        </div>
        <hr>
        <div class="info-proj">
            <a :href="webSite" target="_blank" v-if="haveWebSite"><font-awesome-icon :icon="['far', 'eye']" size="2x"/></a>
            <a :href="repository" target="_blank"><font-awesome-icon :icon="['fas', 'code']" size="2x" /></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyProject',
    props: { 
        name: {},
        img: { type: String },
        summary: {},
        technologies: { type: Array },
        haveWebSite: { type: Boolean},
        webSite: {},
        repository: {}
    },
    data: function(){
        return{
            imageSrc: null
        }
    },
    methods: {
        capitalize(str) {
            if(str === 'js') {
                return 'JavaScript';
            }
            if(str.includes('js')) {
                str = str.replace('js', '');
            }
            return str.charAt(0).toUpperCase() + str.substr(1);
        }
    },
    mounted(){
        this.imageSrc = require(`/static/assets/${this.img}`);
    }
}
</script>

<style>
.project {
    justify-content: center;
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

.summary {
    width: 70%;
}

.technologies-proj {
    display: flex;
    width: 450px;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.icon {
    width: 30px;
    height: 30px;
}

.icon:hover {
    transform: scale(1.08);
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

.info-proj a:hover {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .project img {
        width: 360px;
        height: 247px;
    }
}

@media (max-width: 576px) {
    .technologies-proj {
        width: 80%;
    }

    .project img{
        width: 80%;
        height: 80%;
    } 

}

</style>