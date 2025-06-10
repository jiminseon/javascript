import React, { createContext, useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";

// createContext(초기 Context Value)
const UserContext = createContext(null);

// Context는 2가지의 내부 요소:
// 1. Provider: 공통된 state를 제공하는 요소. =>컴포넌트
// 2. Consumer: 공통된 state를 소비하는 요소.

// console.log(UserContext);
// const Provider = UserContext.Provider

export { UserContext };

/**
 * [우리가 원하는 것]
 * User로그인은 NavBar에서 등록
 *
 * User출력은 Main과 Footer, Navbar 모두에서 사용.
 *
 * ==> Global하게 공통(공유된) State에 접근 및 사용.
 */
export default function ContextApp() {
  // User 로그인 및 User 정보

  // 공통으로 사용할(공유할) State 정의
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({
      name: username,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    // Context.Provider의 value로 주는 값이 공유됩니다.
    <UserContext.Provider value={{ user: user, login: login, logout: logout }}>
      <div>
        <div style={{ backgroundColor: "#e9e9e9" }}>
          <Navbar />
        </div>

        <div style={{ minHeight: "100vh" }}>
          <Main />
        </div>

        <div style={{ backgroundColor: "#e9e9e9" }}>
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  );
}

/**
 * 매번
 * const ctx = useContext(UserContext);
 * 위 코드처럼 작성하는 건 직관성이 떨어진다.
 * ==> 조금 더 직관적인 이름이 필요하다.
 * ==> 예를 들면, 유저에 관련된 혹은 인증 관련된 기능들의 집합체이기 때문에
 * ==> useAuth()같은 건 어떨까?
 */

export function useAuth() {
  const ctx = useContext(UserContext);
  console.log("useAuth", ctx);

  return ctx;
}
