<template>
  <v-app>
    <v-app-bar app color="primary" dark class="elevation-0">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text>
        <v-icon>dashboard</v-icon>
        <span class="ml-2">Inicio</span>
      </v-btn>

      <v-btn to="/numbers" text>
        <v-icon>contact_phone</v-icon>
        <span class="ml-2">Mis números</span>
      </v-btn>

      <v-btn to="/calls" text>
        <v-icon>call</v-icon>
        <span class="ml-2">Mis llamadas</span>
      </v-btn>

      <v-btn to="/profile" text>
        <v-icon>person</v-icon>
        <span class="ml-2">Marcos Almendros</span>
      </v-btn>
    </v-app-bar>
    <!-- <AppBar /> -->

    <v-content>
      <router-view></router-view>

      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
        fixed
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="blue darken-2" dark fab>
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-btn fab dark small color="green">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn fab dark small color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-content>
  </v-app>
</template>

<script>
import "./assets/css/modifyStylesVuetify.css";

export default {
  name: "App",

  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: true,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition"
  }),

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    }
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  }
};
</script>


