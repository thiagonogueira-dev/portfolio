<template>
    <section>
        <div class="title">
            <hr>
            <h2>{{ title }}</h2>
            <hr>
        </div>
    </section>
</template>

<script>
export default {
  name: "MySectionTitle",
  props: { title: {} }
};
</script>

<style>

.title {
    margin-top: 58px;
    margin-bottom: 10px;
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0px 5px;
}

.title h2 {
    font-size: 2.0rem;
}

.title hr {
  width: 50%;
  border: 1px solid var(--detail-blue);
}

@media (max-width: 992px) {
    .title {
        width: 750px;
    }
}

@media (max-width: 768px) {
    .title {
        width: 530px;
    }
}

@media (max-width: 576px) {
    .title {
        flex-direction: row;
        width: 320px;
    }
}

</style>