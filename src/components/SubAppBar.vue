<template>
  <div style="background:#F5F5F5;">
    <v-container class="d-flex align-center">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <h2 class="display-1" style="color:#707070;">{{title}}</h2>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" md="4">
          <v-text-field hide-details dense outlined label="Buscar" prepend-inner-icon="search"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'SubAppBar',
  }
</script>