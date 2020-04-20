<template>
  <v-container>
    <h2 class="display-1" style="color:#707070;">Inicio</h2>
    <v-row class="text-center">
      <v-col cols="3">
        <v-card class="pa-3">
          <div style="color:#707070; font-size:16px; font-weight: 500;">Mi linea</div>
          <div class="d-flex align-center justify-center">
            <h1 class="primary--text mt-3 mb-3">Activa</h1>
            <v-icon class="primary--text">import_export</v-icon>
          </div>
          <div style="color:#BEBEBE;">Estado</div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-3">
          <div style="color:#707070; font-size:16px; font-weight: 500;">Mi credito</div>
          <div class="d-flex align-center justify-center">
            <h1 class="accent--text mt-3 mb-3">$500.00</h1>
            <v-icon class="accent--text">trending_up</v-icon>
          </div>
          <div style="color:#BEBEBE;">Disponibles</div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-3">
          <div style="color:#707070; font-size:16px; font-weight: 500;">Mi debito</div>
          <div class="d-flex align-center justify-center">
            <h1 class="error--text mt-3 mb-3">$400.00</h1>
            <v-icon class="error--text">trending_down</v-icon>
          </div>
          <div style="color:#BEBEBE;">Debo</div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-3">
          <div style="color:#707070; font-size:16px; font-weight: 500;">Mi plan</div>
          <div class="d-flex align-center justify-center">
            <h1 class="success--text mt-3 mb-3">$600.00</h1>
            <v-icon class="success--text">assignment</v-icon>
          </div>
          <div style="color:#BEBEBE;">Costo mensual</div>
        </v-card>
      </v-col>

      <v-col cols="6">
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
      <v-col cols="6">
        <v-card class="pa-3 modify-h">
          <ChartBar />
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="pa-3 modify-h">
          <ChartBar />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
