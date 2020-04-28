<template>
  <div>
    <div class="grayOne">
      <v-container class="d-flex align-center">
        <v-row>
          <v-col sm="6" md="4">
            <TitleSubAppBar title="Perfil"></TitleSubAppBar>            
          </v-col>
          <v-spacer></v-spacer>
          <v-col sm="6" md="4" class="d-flex justify-end">
            <v-btn color="error" outlined elevation="0">
              <span>Cerrar sesíon</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-card class="pa-3">
        <div class="grayTwoDark--text" style="font-size:16px; font-weight: 500;">Mi plan</div>

        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-row align="center">
            <v-col class="col-12 col-sm-6">
              <v-text-field hide-details dense outlined label="Usuario" prepend-icon="info" @click:prepend="infoInputs"></v-text-field>
              <!-- <v-text-field label="Filled" filled required></v-text-field> -->
            </v-col>
            <v-col class="col-12 col-sm-6">
              <v-text-field hide-details dense outlined label="Usuario"></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field hide-details dense outlined label="Usuario"></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field hide-details dense outlined label="Usuario"></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field hide-details dense outlined label="Usuario"></v-text-field>
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
          ></v-select>-->

          <!-- <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
          ></v-checkbox>-->

          <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn> -->

          <!-- <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn> -->

          <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
        </v-form>
      </v-card>
    </v-container>
  </div>
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
    },
    infoInputs() {
      console.log('info')
    }
  }
};
</script>