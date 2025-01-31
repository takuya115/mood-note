import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        options: { customProperties: true },
        themes: {
            light: {
                primary: colors.green.darken1,
                secondary: colors.green.darken4,
            }
        }
    }
});
