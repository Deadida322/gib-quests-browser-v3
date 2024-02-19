/* stylelint-disable */

// Styles

import "vuetify/styles";
import gradient from "../themes/defaultTheme.js";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
    theme: {
        defaultTheme: "gradient",
        themes: {
            gradient
        }
    }
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
