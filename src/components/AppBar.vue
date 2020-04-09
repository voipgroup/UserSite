<template>
  <nav>
    <v-toolbar>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn color="primary" to="/" text>
            <v-icon>open_in_new</v-icon>
            <span class="mr-2">Dashboard</span>
          </v-btn>

          <router-link to="/">Home</router-link>
          <router-link to="/helloword">Home</router-link>
        </v-toolbar-items>
      </div>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "AppBar",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ]
  })
};
</script>