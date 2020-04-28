<template>
  <v-app-bar app color="error" dark class="elevation-0">
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

    <div v-for="(item, i) in items" :key="i" class="d-none d-sm-flex">
      <v-btn :to="item.to" text>
        <v-icon v-text="item.icon"></v-icon>
        <span v-text="item.text" class="ml-2"></span>
      </v-btn>
    </div>

    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn class="d-sm-none" dark icon v-on="on">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>

      <v-list flat class="d-sm-none">
        <v-list-item-group v-model="item" color="error">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",

  data: () => ({
    item: 0,
    items: [
      { text: "Inicio", icon: "dashboard", to: "/" },
      { text: "Mis números", icon: "contact_phone", to: "/numbers" },
      { text: "Mis llamadas", icon: "call", to: "/calls" },
      { text: "Perfil", icon: "person", to: "/profile" }
    ]
  })
};
</script>