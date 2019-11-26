<template>
  <header>
    <nav>
      <ul class="menu">
        <li class="menu-item">
          <router-link to="/" class="menu-item__link">
            <i-users class="icon"></i-users>
            <span>Contacts</span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/create" class="menu-item__link">
            <i-add class="icon"></i-add>
            <span>New</span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/about" class="menu-item__link">
            <i-about class="icon"></i-about>
            <span>About</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import iUsers from '@/assets/icons/users.svg';
import iAdd from '@/assets/icons/add.svg';
import iAbout from '@/assets/icons/about.svg';
import iEdit from '@/assets/icons/edit.svg';
import iRemove from '@/assets/icons/remove.svg';

export default {
  name: 'site-header',
  components: {
    iUsers,
    iAdd,
    iAbout,
    iEdit,
    iRemove,
  }
}
</script>

<style lang="scss" scoped>
header {
  font-family: verdana;
  font-size: .875rem;
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
  max-width: $page-width;
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
        color: $color-route;
        text-decoration: none;
        letter-spacing: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 0 16px;

        .icon {
          fill: $color-primary;
        }

        span {
          margin-top: .25rem;
        }

        &:active, &:link {
          outline: none;
        }

        &:hover {
          color: #000;
          background: $bg-nav-active;

          .icon {
            fill: #000;
          }
        }
      }
    }

    .router-link-exact-active {
      background: $bg-nav-selected;
      border-bottom: 2px solid $color-accent;

      &:hover {
        color: #fff;

        .icon {
          fill: #fff;
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