<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="../assets/logo.png"
          style="object-fit: cover; min-height: 45px"
          height="500"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link
          to="/authorize"
          active-class="is-active"
          class="navbar-item is-active"
        >
          Autorizar
        </router-link>

        <router-link
          active-class="is-active"
          to="/revogue"
          class="navbar-item is-active"
          >Revogar</router-link
        >
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup></script>
