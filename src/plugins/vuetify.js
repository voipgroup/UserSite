import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#007afd',
        secondary: '#FF5252',
        accent: '#8534c1',
        error: '#BE1622',
        info: '#ff1067',
        success: '#6ac259',
        warning: '#ffc400',
        grayOneLight: '#FAFAFA',
        grayOne: '#F5F5F5',
        grayOneDark: '#EEEEEE',
        grayTwoLight: '#E0E0E0',
        grayTwo: '#BEBEBE',
        grayTwoDark: '#707070',
      },
    },
  },
  icons: {
    iconfont: 'md',
  },
});
