<template>
    <section>
        <div class="title">
            <hr>
            <h2>PROJETOS</h2>
            <hr>
        </div>
    </section>
</template>

<script>
export default {
  name: "MyProjects",
};
</script>

<style>
.title {
    margin-top: 55px;
    width: 900px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0px 5px;
}

.title h2 {
    font-size: 1.9rem;
}

.title hr {
  width: 50%;
  border-width: 1.5px;
  border-color: var(--detail-blue);
}
</style>