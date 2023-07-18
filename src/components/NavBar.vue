<template>
  <nav class="bg-dark navbar navbar-expand-lg">
    <div class="container-fluid">
      <p class="navbar-brand logo text-light">T<span>h</span></p>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon menu-icon"></span>
      </button>
      <div class="justify-content-end collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Projetos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Tecnologias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  position: fixed !important;
  width: 100%;
  top: 0;
  z-index: 1;
}
.logo {
  font-size: 1.5rem !important;
  margin: 0;
}

.logo span {
    color: var(--detail-blue);
}

.menu-icon {
  background-color: #d9d9d9;
  border: none !important;
  border-radius: 5px;
}

#navbarNav {
  margin-right: 20px;
}
</style>

