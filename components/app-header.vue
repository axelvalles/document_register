<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/">TemporaryEngine</nuxt-link>

      <button
class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarColor01" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Inicio</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/permisos">Permisos</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/seguros">Seguros</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/titulos">Titulos</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/contactos">Contactanos</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
