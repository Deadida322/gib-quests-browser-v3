/* stylelint-disable */

// Styles

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import defaultTheme from "../themes/defaultTheme";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
    defaultTheme: "defaultTheme",
    themes: {
        defaultTheme
    }
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
