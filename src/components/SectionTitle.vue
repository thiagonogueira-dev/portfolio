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
    margin-top: 55px;
    margin-bottom: 10px;
    width: 900px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0px 5px;
}

.title h2 {
    font-size: 2.0rem !important;
}

.title hr {
  width: 50%;
  border: 1px solid var(--detail-blue);
}
</style>