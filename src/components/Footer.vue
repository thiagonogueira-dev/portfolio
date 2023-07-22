<template>
    <footer class="footer bg-dark" id="contato">
        <h3>Contato</h3>
        <div class="contacts">
            <div class="item">
                <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
                <p>th.nogueira21@gmail.com</p>
            </div>
            <div class="item">
                <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
                <a href="https://www.linkedin.com/in/thiago-nogueira-247903218/" target="_blank">Thiago Nogueira</a>
            </div>
        </div>
        <hr>
        <p>© 2023 Thiago Nogueira</p>
    </footer>
</template>

<script>
export default {
    name: 'MyFooter'
}
</script>

<style>
p {
    margin: 0;
}

.footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 25px 0px 10px 0px;
    margin-top: 10px;
}

.footer h3 {
    font-size: 2.1rem;
}

.contacts {
    margin-top: 20px;
    width: 500px;
    justify-content: space-evenly;
}

.contacts, .item {
    display: flex;
    flex-direction: row;
}

.item p, a {
    margin: 2px 0px 0px 6px;
}

.item a {
    color: white;
}

.footer hr {
    width: calc(100% - 20px);
    margin-bottom: 30px;
}
</style>