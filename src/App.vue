<template>
  <v-app>
    <v-app-bar app color="secondary" dark class="elevation-0">
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
        <span class="ml-2">Perfil</span>
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
          <v-btn v-model="fab" color="primary" dark fab>
            <v-icon v-if="fab">close</v-icon>
            <v-icon v-else>open_in_new</v-icon>
          </v-btn>
        </template>
        <v-btn href="https://www.google.com.ar/?hl=es-419" target="_blank" fab dark small>
          <v-avatar>
            <img src="data:image/png;base64,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" alt="John" />
          </v-avatar>
        </v-btn>
        <v-btn href="https://www.google.com.ar/?hl=es-419" target="_blank" fab dark small>
          <v-avatar>
            <img src="https://lh3.googleusercontent.com/BJf-aifSJ8ufiDGBLY38Wz81AHiOlkiEjCw-5gCQ1ajEYvkM41mQNRhINwv1lyTIXg" alt="John" />
          </v-avatar>
        </v-btn>
        <v-btn href="https://www.google.com.ar/?hl=es-419" target="_blank" fab dark small>
          <v-avatar>
            <img src="https://pbs.twimg.com/profile_images/760144094584766464/J1-CofBW_400x400.jpg" alt="John" />
          </v-avatar>
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


