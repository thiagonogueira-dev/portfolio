<template>
    <section class="apresentation">
        <div class="text">
            <div class="info">
                <div class="name-links">
                    <h1>Thiago Nogueira</h1>
                    <div class="icons">
                        <a href="https://github.com/thiagonogueira-dev" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']" title="GitHub" class="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/thiago-nogueira-247903218/" target="_blank">
                            <font-awesome-icon :icon="['fab', 'linkedin']" title="Linkedin" class="linkedin"/>
                        </a>
                        <a href="" target="_blank">
                            <font-awesome-icon :icon="['fas', 'file-lines']" title="Currículo" class="curriculo"/>
                        </a>
                    </div>
                </div>

                <h2>Estudante de Sistemas de Informação</h2>
            </div>
            <div class="summary">
                Olá! Me chamo Thiago, tenho 21 anos e sou apaixonado por tecnologia. Atualmente, estou em busca da minha primeira oportunidade no mercado de trabalho e estou estudando Java com o framework Spring Boot, Node.js e Vue.js. Pretendo me tornar um programador back-end ou fullstack.
            </div>
        </div>
        <div class="figure">
            <img src="../../static/assets/figure.png" alt="Figura">
        </div>
    </section>
</template>

<script>
export default {
    name: 'MyApresentation'
}
</script>

<style>
    .apresentation {
        display: flex;
        flex-direction: row;
        width: 900px;
        justify-content: space-between;
    }

    .text {
        width: 70%;
    }

    .name-links{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 90%;
    }

    .info h2 {
        font-size: 1.5rem;
    }

    .name-links h1 {
        font-size: 2.1rem;
        margin-right: 10px;
    }

    .icons {
        width: 25%;
        display: flex;
        justify-content: space-around;
    }


    .figure img {
        margin-top: 30px;
        width: 200px;
        height: 180px;
    }

    .summary {
        width: 90%;
    }

    .linkedin, .github, .curriculo {
        color: gray;
        width: 35px;
        height: 35px;
    }

    .linkedin:hover, .github:hover, .curriculo:hover {
        transform: scale(1.15);
    }

    .linkedin:hover {
        color: #0A66C2;
    }

    .github:hover {
        color: #000000;
    }

    .curriculo:hover {
        color: #868686;
    }
    
    @media (max-width: 992px) {
        .apresentation {
            width: 750px;
        }
    }

    @media (max-width: 768px) {
        .apresentation {
            width: 530px;
        }

        .name-links {
            width: 100%;
        }

        .name-links h1 {
            font-size: 1.6rem;
        }

        .info h2 {
            font-size: 1.3rem;
        }

        .summary {
            width: 95% !important;
        }

        .apresentation .figure {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .figure img {
            width: 150px;
            height: 140px;
            padding-left: 10px;
        }

        .icons {
            width: 35%;
            justify-content: space-between;
        }

        .linkedin, .github, .curriculo {
            width: 30px;
            height: 30px;
        }

        .linkedin {
            color: #0A66C2;
        }

        .github {
            color: #000000;;
        }

        .curriculo {
            color: #868686;
        }
        
        .linkedin:hover, .github:hover, .curriculo:hover {
            transform: none;
        }
    }

    @media (max-width: 576px) {
        .apresentation {
            width: 100%;
            justify-content: center;
        }

        .apresentation .text {
            width: 100%;
            padding-left: 15px;
        }

        .apresentation .summary {
            width: 100%;
        }

        .apresentation .figure {
            display: none;
        }

        .name-links h1 {
            font-size: 1.35rem;
        }

        .info h2 {
            font-size: 1.15rem;
        }

        .linkedin, .github, .curriculo {
            width: 30px;
            height: 30px;
        }

        .icons {
            width: 130px;
        }
    }

    

</style>