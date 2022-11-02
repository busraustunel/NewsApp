import React from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
//I want to use the width and height of the device in my stylesheets
//so I'm exporting them here
export default {
  width,
  height,
};
