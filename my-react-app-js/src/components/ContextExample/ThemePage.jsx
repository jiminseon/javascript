import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import UseTheme from "./UseTheme";

export default function ThemePage() {
  //   const { theme, toggleTheme } = useContext(ThemeContext);
  const { theme, toggleTheme } = UseTheme();
  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "#e9e9e9" }
          : { backgroundColor: "black" }
      }
    >
      <div style={{ minHeight: 600 }}>MyPage</div>
    </div>
  );
}
