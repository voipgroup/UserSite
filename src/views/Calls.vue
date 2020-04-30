<template>
  <div>
    <div class="grayOne">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <TitleSubAppBar title="Mis llamadas"></TitleSubAppBar>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="3">
            <v-select hide-details dense outlined :items="items" label="Usuario"></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-menu
              v-model="menuDate"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="dateRangeText"
                  label="Rango de fecha"
                  prepend-inner-icon="event"
                  readonly
                  v-on="on"
                  hide-details
                  dense
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker v-model="dates" @input="successDate" range></v-date-picker>
            </v-menu>
          </v-col>
          <v-col class="d-flex align-center justify-space-between" cols="12" sm="6" md="3">
            <v-btn depressed class="mr-2" color="primary">Aplicar</v-btn>
            <v-btn outlined class="mr-2" color="primary">Remover</v-btn>

            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon color="grayTwoDark" v-on="on">
                  <v-icon>save_alt</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in downloadItems" :key="index" @click="console.log('download')">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-end align-center">
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              v-model="search"
              @input="searchItems"
              hide-details
              dense
              outlined
              label="Buscar"
              prepend-inner-icon="search"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-data-table :headers="headers" :items="myCalls" class="elevation-1">
        <template v-slot:item.numeroDestino="{ item }">
          <v-chip
            label
            outlined
            small
            x-small
            :color="getColor(item.numeroDestino)"
            dark
          >{{ item.numeroDestino }}</v-chip>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      downloadItems: [
        { title: 'COPY' },
        { title: 'CSV' },
        { title: 'PDF' },
      ],
      items: ["Todos los usuarios", "Bar", "Fizz", "Buzz"],
      menuDate: false,
      dates: [],
      headers: [
        {
          text: "Fecha",
          align: "start",
          sortable: false,
          value: "fecha"
        },
        { text: "Número de destino", value: "numeroDestino" },
        { text: "Descripción de destino", value: "descripcionDestino" },
        { text: "Duración", value: "duracion" },
        { text: "Costo", value: "costo" }
      ],
      myCalls: [
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 6.0,
          duracion: 24,
          costo: 4.0
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 9.0,
          duracion: 37,
          costo: 4.3
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 16.0,
          duracion: 23,
          costo: 6.0
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 3.7,
          duracion: 67,
          costo: 4.3
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 16.0,
          duracion: 49,
          costo: 3.9
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 0.0,
          duracion: 94,
          costo: 0.0
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 0.2,
          duracion: 98,
          costo: 0
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 3.2,
          duracion: 87,
          costo: 6.5
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 25.0,
          duracion: 51,
          costo: 4.9
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 26.0,
          duracion: 65,
          costo: 7
        }
      ],
      myCallsCopy: [
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 6.0,
          duracion: 24,
          costo: 4.0
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 9.0,
          duracion: 37,
          costo: 4.3
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 16.0,
          duracion: 23,
          costo: 6.0
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 3.7,
          duracion: 67,
          costo: 4.3
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 16.0,
          duracion: 49,
          costo: 3.9
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 0.0,
          duracion: 94,
          costo: 0.0
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 0.2,
          duracion: 98,
          costo: 0
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 3.2,
          duracion: 87,
          costo: 6.5
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 25.0,
          duracion: 51,
          costo: 4.9
        },
        {
          fecha: "10/03/2020",
          numeroDestino: 153567845,
          descripcionDestino: 26.0,
          duracion: 65,
          costo: 7
        }
      ]
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },
  methods: {
    searchItems(value) {
      const list = this.myCallsCopy.filter(item => {
        if (
          item.fecha.toUpperCase().includes(value.toUpperCase()) ||
          `${item.numeroDestino}`.includes(value) ||
          `${item.descripcionDestino}`.includes(value) ||
          `${item.duracion}`.includes(value) ||
          `${item.costo}`.includes(value)
        )
          return true;
        return false;
      });
      this.myCalls = list;
    },
    getColor(numeroDestino) {
      if (numeroDestino > 400) return "primary";
      else if (numeroDestino > 200) return "orange";
      else return "green";
    },
    successDate() {
      if (this.dates.length === 2) this.menuDate = false;
    }
  }
};
</script>