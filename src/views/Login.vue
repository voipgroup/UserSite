<template>
  <v-container>
    <v-row align="center">
      <v-col class="col-12 col-sm-6"></v-col>
      <v-col class="col-12 col-sm-6">
        <v-form @submit.prevent="login" ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field
            dense
            outlined
            v-model="name"
            counter
            :rules="nameRules"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            dense
            outlined
            v-model="password"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show ? 'text' : 'password'"
            :rules="passwordlRules"
            name="pass"
            label="Contraseña"
            counter
            @click:append="show = !show"
          ></v-text-field>
          <v-btn type="submit" :disabled="!valid" block depressed color="primary" @click="validate">Ingresar</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data: () => ({
    show: false,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Nombre requerido",
      v => (v && v.length >= 4) || "Debe tener 4 o más caracteres"
    ],
    password: "",
    passwordlRules: [
      v => !!v || "Contraseña requerida",
      v => (v && v.length >= 4) || "Debe tener 4 o más caracteres"
    ],
    lazy: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    login() {
        console.log(this.name, this.password)
    }
  }
};
</script>