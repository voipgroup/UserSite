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
        secondary: '#424242',
        accent: '#8534c1',
        error: '#FF5252',
        info: '#ff1067',
        success: '#6ac259',
        warning: '#ffc400',
      },
    },
  },
  icons: {
    iconfont: 'md',
  },
});
