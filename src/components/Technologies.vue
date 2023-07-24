<template>
    <section class="technologies" id="tecnologias">
        <SectionTile title="TECNOLOGIAS"/>
        <div class="container-main techs">
            <font-awesome-icon class="icon" v-for="tech in technologiesFaB" :key="tech" :icon="['fab', tech]"/>
            <font-awesome-icon class="icon" v-for="tech in technologiesFaS" :key="tech" :icon="['fas', tech]"/>
        </div>
    </section>
</template>

<script>
import SectionTile from './SectionTitle.vue';

export default {
    name: 'MyTechnologies',
    components: { SectionTile },
    props: {
        technologiesFaB: {type : Array},
        technologiesFaS: {type : Array}
    }
}
</script>

<style>
.technologies {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.techs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px;
}

.techs .icon {
    width: 80px;
    height: 80px;
    margin: 30px 20px;
}

@media (max-width: 768px) {
    .techs .icon {
        width: 60px;
        height: 60px;
    }

    .techs .icon:hover {
        transform: none;
    }
}

@media (max-width: 576px){
    .techs .icon {
        width: 40px;
        height: 40px;
    }
}

</style>