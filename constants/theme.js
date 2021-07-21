import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#0478FF", // blue
    secondary: "#50CAFF",   // lightblue

    // colors
    black: "#374957",
    white: "#FFFFFF",
    TextColor: "#8B9EB0",
    lightGray: "#E3EDF7",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    light: 16,
    thin: 14,


    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Montserrat-Regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Montserrat-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Montserrat-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Montserrat-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Montserrat-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body5, lineHeight: 22 },
    light: { fontFamily: "Montserrat-Light", fontSize: SIZES.light, lineHeight: 22 },
    thin: { fontFamily: "Montserrat-Thin", fontSize: SIZES.thin, lineHeight: 22 },


};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;