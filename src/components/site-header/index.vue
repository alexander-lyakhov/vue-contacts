<template>
  <header>
    <nav>
      <ul class="menu">
        <li class="menu-item">
          <router-link to="#" class="menu-item__link menu-item__link-selected">Contacts</router-link>
        </li>

        <li class="menu-item">
          <router-link to="#" class="menu-item__link">New</router-link>
        </li>

        <li class="menu-item">
          <router-link to="#" class="menu-item__link">About</router-link>
        </li>

        <li class="menu-item">
          <router-link to="#" class="menu-item__link">Contacts</router-link>
        </li>

        <li class="menu-item">
          <router-link to="#" class="menu-item__link">New</router-link>
        </li>

        <li class="menu-item">
          <router-link to="#" class="menu-item__link">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: $bg-header;
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  z-index: 1;
}

nav {
  background: $bg-nav;
  min-width: $min-width;
  max-width: 930px;
  height: 64px;
  margin: auto;
  //padding: 0px 16px;
  display: flex;
  align-items: center;

  .menu {
    height: 100%;
    display: flex;

    &-item {
      height: 100%;

      &__link {
        font-size: 16px;
        color: $color-route;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 16px;

        &-selected {
          background: $bg-nav-selected;
          border-bottom: 2px solid $color-accent;
        }

        &:active, &:link {
          outline: none;
        }

        &:hover {
          color: #000;
          background: $bg-nav-active;
        }
      }
    }
  }
}

.stripe {
  background: #080;
  height: 4px;
}
</style>