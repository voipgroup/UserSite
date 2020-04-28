<template color="grayTwo">
  <v-app>
    <AppBar />

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
            <img
              src="https://pbs.twimg.com/profile_images/419530145485950977/X0RJDov6_400x400.png"
              alt="John"
            />
          </v-avatar>
        </v-btn>
        <v-btn href="https://www.google.com.ar/?hl=es-419" target="_blank" fab dark small>
          <v-avatar>
            <img
              src="https://lh3.googleusercontent.com/BJf-aifSJ8ufiDGBLY38Wz81AHiOlkiEjCw-5gCQ1ajEYvkM41mQNRhINwv1lyTIXg"
              alt="John"
            />
          </v-avatar>
        </v-btn>
        <v-btn href="https://www.google.com.ar/?hl=es-419" target="_blank" fab dark small>
          <v-avatar>
            <img
              src="https://pbs.twimg.com/profile_images/760144094584766464/J1-CofBW_400x400.jpg"
              alt="John"
            />
          </v-avatar>
        </v-btn>
      </v-speed-dial>
    </v-content>
  </v-app>
</template>

<script>
import "./assets/css/modifyStylesVuetify.css";
import AppBar from "./components/AppBar";

export default {
  name: "App",

  components: {
    AppBar
  },

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


