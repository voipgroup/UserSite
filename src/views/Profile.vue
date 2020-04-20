<template>
  <v-container>
    <h2 class="display-1" style="color:#707070;">Perfil</h2>

    <!-- <v-row align="center"> -->
    <!-- <v-row justify="space-around">
        <v-switch v-model="valid" class="ma-4" label="Valid" readonly></v-switch>
        <v-switch v-model="lazy" class="ma-4" label="Lazy"></v-switch>
    </v-row>-->
    <v-card class="pa-3">
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-row align="center">
          <v-col cols="6">
            <v-text-field label="Filled" filled required></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="Filled" filled required></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Filled" filled required></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Filled" filled required></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Filled" filled required></v-text-field>
          </v-col>
        </v-row>

        <!-- <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field> -->

        <!-- <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field> -->
        <!-- <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select> -->

        <!-- <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox> -->

        <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn> -->

        <!-- <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn> -->

        <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
      </v-form>
    </v-card>
    <!-- </v-row> -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>