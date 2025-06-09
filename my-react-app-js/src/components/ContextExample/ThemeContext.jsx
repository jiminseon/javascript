import { createContext } from "react";

// 테마 컨텍스트 생성
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
