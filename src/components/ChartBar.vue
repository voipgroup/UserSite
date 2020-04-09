<template>
  <apexchart type="bar" height="370" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
import theme from '../plugins/vuetify';

Vue.component("apexchart", VueApexCharts);
const colors = theme.userPreset.theme.themes.light;

export default {
  name: "Dashboard",

  data: () => ({
    series: [
      {
        name: "Personal",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: "Claro",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: "Movistar",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: "Tuenti",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
    ],
    chartOptions: {
      chart: {
        type: "bar",
        height: 350,
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
            pan: true,
            // reset: "<v-icon>dashboard</v-icon>",
          },
          autoSelected: "zoom"
        },

      },
      colors: ["#42BFF7", colors.info, colors.success, colors.accent, colors.warning],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        // title: {
        //   text: "$ (thousands)"
        // }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " min";
          }
        }
      },
      legend: {
        fontSize: "14px",
        fontFamily: "Roboto, Arial",
        floating: false,
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          // offsetX: 0,
          // offsetY: 0,
        },
        // itemMargin: {
        //   vertical: 15
        // },
      },
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
