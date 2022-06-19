<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex h-full px-8 mx-auto border-b border-solid flex-nowrap border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
        >
          JoJo Careers
        </router-link>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            type="primary"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </div>
      <subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";
import { LOGIN_USER } from "@/store";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/" },
        { text: "Locations", url: "/" },
        { text: "Life at JoJo", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
    // 把mapState解構出來
    // ...mapState({
    // 屬性名isLoggedIn可以自訂，但通常取狀態同名
    // 寫法一
    // isLoggedIn: (state) => state.isLoggedIn,
    // 寫法二
    // isLoggedIn: "isLoggedIn",
    // }),
    // 寫法三
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    loginUser() {
      this.$store.commit(LOGIN_USER);
    },
  },
};
</script>
