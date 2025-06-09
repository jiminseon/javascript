import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function UseTheme() {
  return useContext(ThemeContext);
}
