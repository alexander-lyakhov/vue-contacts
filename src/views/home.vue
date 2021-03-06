<template>
  <ul class="user-list">
    <li class="user-list__item" v-for="user in users" :key="user.id" @click="openHistory(user.id)">
      <div class="user-info">
        <div class="user-info__name">
          {{user.lastName}} {{user.firstName}} {{user.secondName}}
        </div>
        <div class="user-info__phone">
          {{user.phone}}
        </div>
        <div class="user-info__actions">
          <a href="#" @click.stop="editContact(user.id)"><i-edit class="icon"></i-edit></a>
          <a href="#" @click.stop="removeContact(user.id)"><i-remove class="icon"></i-remove></a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import iEdit from '@/assets/icons/edit.svg';
import iRemove from '@/assets/icons/remove.svg';
import {
  sweetAlert,
  DELETING_REQUEST,
  DELETING_COMPLETE,
  ERROR_MESSAGE,
} from '@/defs/swal';


export default {
  name: 'home',

  components: {
    iEdit,
    iRemove,
  },

  created() {
    this.$store.dispatch('GET_CONTACT_LIST').catch(err =>
      sweetAlert(ERROR_MESSAGE, err)
    );
  },

  computed: {
    ...mapState({
      users: 'contacts',
    }),
    ...mapGetters(['getContactFullName']),
  },


  methods: {
    editContact(userID) {
      this.$router.push({
        name: 'edit',
        params: {
          id: userID,
        },
      });
    },

    removeContact(userID) {
      const fullName = this.getContactFullName(userID);

      sweetAlert(DELETING_REQUEST, fullName).then(res => {
        res.value
          && this.$store.dispatch('REMOVE_CONTACT', userID).then(
            res => {
              sweetAlert(DELETING_COMPLETE, fullName);
            },
            err => {
              sweetAlert(ERROR_MESSAGE, err);
            },
          );
      });
    },

    openHistory(id) {
      this.$router.push({
        name: 'history',
        params: { id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>

$list-item-hover: $md-blue-grey-700;

.user-list {
  margin: 0 -1rem;

  &__item {
    width: 100%;
    padding: 0 1rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:not(:last-child) .user-info {
      border-bottom: 1px solid $md-blue-grey-500;
    }
  }

  .user-info {
    padding: .5rem 0;
    transition: padding .2s;
    position: relative;
    overflow: hidden;

    &:hover {
      background: $list-item-hover;
      padding-left: 1rem;

      .user-info__actions {
        opacity: 1;
        top: 0;
      }
    }

    &__name {
      font: 24px Helvetica;
      color: $color_primary;
      letter-spacing: 1px;
      padding: 0.5rem 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__phone {
      font-size: 18px;
      color: $color-secondary;
      letter-spacing: 1px;
      padding: 0.25rem 0;
    }

    &__actions {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 100%;
      position: absolute;
      right: 0;
      top: -2rem;
      opacity: 0;
      transition: top .2s, opacity .2s;

      .icon {
        fill: #fff;
        margin: .25rem 0;
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
