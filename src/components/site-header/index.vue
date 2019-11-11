<template>
  <header>
    <nav>
      <ul class="menu">
        <li class="menu-item">
          <a class="menu-item__link menu-item__link-selected" href="#">Contacts</a>
        </li>

        <li class="menu-item">
          <a class="menu-item__link" href="#">New</a>
        </li>

        <li class="menu-item">
          <a class="menu-item__link" href="#">About</a>
        </li>

        <li class="menu-item">
          <a class="menu-item__link" href="#">New</a>
        </li>

        <li class="menu-item">
          <a class="menu-item__link" href="#">About</a>
        </li>

        <li class="menu-item">
          <a class="menu-item__link" href="#">New</a>
        </li>

        <li class="menu-item">
          <a class="menu-item__link" href="#">About</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
</script>

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
    //background: #066;
    height: 100%;
    display: flex;

    &-item {
      height: 100%;

      &__link {
        font-size: 16px;
        color: $color_route;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 16px;

        &-selected {
          background: $bg-main;
          border-bottom: 2px solid #c96;
        }

        &:active, &:link {
          outline: none;
        }

        &:hover {
          background: $bg-main;
        }
      }
      &[disabled] {
        .menu-item__link {
            color: $color-route__disabled;
            &:hover {
              background: $bg-nav;
              cursor: default;
            }
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