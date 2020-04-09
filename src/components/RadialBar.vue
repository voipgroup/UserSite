<template>
  <apexchart type="radialBar" height="400" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
import theme from "../plugins/vuetify";

Vue.component("apexchart", VueApexCharts);
const colors = theme.userPreset.theme.themes.light;

export default {
  name: "Dashboard",

  data: () => ({
    series: [76, 67],
    chartOptions: {
      chart: {
        height: 350,
        type: "radialBar",
        background: "#fff",
        fontFamily: "Roboto, Arial, sans-serif",
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: '<span class="material-icons">more_vert</span>',
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true
            // reset: "<v-icon>dashboard</v-icon>",
          },
          autoSelected: "zoom"
        }
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 240,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: [colors.accent, colors.info],
      labels: ["Disponible", "Usado"],
      legend: {
        show: true,
        floating: false,
        fontSize: "14px",
        position: "bottom",
        // offsetX: 100,
        // offsetY: 25,
        // offsetY: 40,
        labels: {
          //   useSeriesColors: true
        },

        markers: {
          size: 0
        },
        formatter: function(seriesName, opts) {
          return (
            seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "min"
          );
        },
        itemMargin: {
        //   vertical: 15
        },
        fontFamily: "Roboto, Arial"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ],
      title: {
        text: "Llamadas",
        // rotate: 90,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#707070",
          fontSize: "16px",
          fontFamily: "Roboto",
          fontWeight: "500",
          cssClass: "apexcharts-yaxis-title"
        }
      }
    }
  })
};
</script>
