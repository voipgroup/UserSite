<template>
  <div>
    <div class="grayOne">
      <v-container class="d-flex align-center">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <TitleSubAppBar title="Inicio"></TitleSubAppBar>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="4">
            <v-text-field hide-details dense outlined label="Buscar" prepend-inner-icon="search"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container>
      <v-row class="text-center">
        <v-col class="col-12 col-sm-3">
          <v-card class="pa-3">
            <div class="grayTwoDark--text" style="font-size:16px; font-weight: 500;">Mi linea</div>
            <div class="d-flex align-center justify-center">
              <h1 class="primary--text mt-3 mb-3">Activa</h1>
              <v-icon class="primary--text">import_export</v-icon>
            </div>
            <div class="grayTwo--text">Estado</div>
          </v-card>
        </v-col>
        <v-col class="col-12 col-sm-3">
          <v-card class="pa-3">
            <div class="grayTwoDark--text" style="font-size:16px; font-weight: 500;">Mi credito</div>
            <div class="d-flex align-center justify-center">
              <h1 class="accent--text mt-3 mb-3">$500.00</h1>
              <v-icon class="accent--text">trending_up</v-icon>
            </div>
            <div class="grayTwo--text">Disponibles</div>
          </v-card>
        </v-col>
        <v-col class="col-12 col-sm-3">
          <v-card class="pa-3">
            <div class="grayTwoDark--text" style="font-size:16px; font-weight: 500;">Mi debito</div>
            <div class="d-flex align-center justify-center">
              <h1 class="error--text mt-3 mb-3">$400.00</h1>
              <v-icon class="error--text">trending_down</v-icon>
            </div>
            <div class="grayTwo--text">Debo</div>
          </v-card>
        </v-col>
        <v-col class="col-12 col-sm-3">
          <v-card class="pa-3">
            <div class="grayTwoDark--text" style="font-size:16px; font-weight: 500;">Mi plan</div>
            <div class="d-flex align-center justify-center">
              <h1 class="success--text mt-3 mb-3">$600.00</h1>
              <v-icon class="success--text">assignment</v-icon>
            </div>
            <div class="grayTwo--text">Costo mensual</div>
          </v-card>
        </v-col>

        <v-col class="col-12 col-sm-6">
          <v-card class="pa-3 modify-h">
            <RadialBar />
          </v-card>
        </v-col>
        <!-- <v-col cols="6">
        <v-card>
          <apexchart type="donut" height="350" :options="chartOptions" :series="series"></apexchart>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <ChartBar />
        </v-card>
        </v-col>-->
        <v-col class="col-12 col-sm-6">
          <v-card class="pa-3 modify-h">
            <ChartBar />
          </v-card>
        </v-col>
        <v-col class="col-12">
          <v-card class="pa-3 modify-h">
            <ChartBar />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
import ChartBar from "../components/ChartBar";
import RadialBar from "../components/RadialBar";

Vue.component("apexchart", VueApexCharts);

export default {
  name: "Dashboard",

  components: {
    ChartBar,
    RadialBar
  },

  data: () => ({
    series: [44, 55, 41, 17, 15],
    chartOptions: {
      chart: {
        type: "donut"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
  })
};
</script>
