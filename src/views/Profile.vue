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
      <v-card class="pa-6 mb-6">
        <div
          class="grayTwoDark--text"
          style="font-size:16px; font-weight: 500;"
        >Información de cuenta</div>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-row align="center">
            <v-col class="col-12 col-sm-6">
              <v-text-field
                hide-details
                dense
                outlined
                label="Descripción de usuario"
                prepend-icon="info"
                @click:prepend="infoInputs"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-6">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Código de usuario"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-6">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Cuenta"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-6">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Deuda"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-6">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Habilitado"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-6">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Avisarme cuando mi crédito sea menor a $"
              ></v-text-field>
            </v-col>
          </v-row>

          <div class="d-flex justify-end mt-3">
            <v-btn color="primary" elevation="0">
              <span>Editar</span>
            </v-btn>
          </div>
        </v-form>
      </v-card>

      <v-card class="pa-6 mb-6">
        <div
          class="grayTwoDark--text"
          style="font-size:16px; font-weight: 500;"
        >Información personal</div>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-row align="center">
            <v-col class="col-12 col-sm-4">
              <v-text-field
                hide-details
                dense
                outlined
                label="Nombre"
                prepend-icon="info"
                @click:prepend="infoInputs"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Apellido"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Fecha de nacimiento"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Sexo"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Pais"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Estado"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Ciudad"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Dirección"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Código postal"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Correo electronico"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Correo electronico alternativo"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-4">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Comentario"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="d-flex justify-end mt-3">
            <v-btn color="primary" elevation="0">
              <span>Editar</span>
            </v-btn>
          </div>
        </v-form>
      </v-card>

      <v-card class="pa-6 mb-6">
        <div class="grayTwoDark--text" style="font-size:16px; font-weight: 500;">Credencíales web</div>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-row align="center">
            <v-col class="col-12 col-sm-6">
              <v-text-field
                hide-details
                dense
                outlined
                label="Usuario web"
                prepend-icon="info"
                @click:prepend="infoInputs"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-6">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Email"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-6">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Nueva contraseña"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-6">
              <v-text-field
                prepend-icon="info"
                @click:prepend="infoInputs"
                hide-details
                dense
                outlined
                label="Confirmar contraseña"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="d-flex justify-end mt-3">
            <v-btn color="primary" elevation="0">
              <span>Editar</span>
            </v-btn>
          </div>
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
      console.log("info");
    }
  }
};
</script>