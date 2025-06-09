import BlinkCompnent from "./components/BlinkComponent";
import CaptionImage from "./components/CaptionImage";
import ClickComponent from "./components/ClickComponent";
import CountComponent from "./components/CountComponent";
import EmailComponent from "./components/emailComponent";
import ExampleUseState from "./components/ExampleUseState";
import HelloWorld from "./components/HelloWorld";
import InputBtnComponent from "./components/inputBtnComponent";
import MyButton from "./components/MyButton";
import { useEffect, useState } from "react";
import StopComponent from "./components/StopComponent";
import TimerComponent from "./components/TimerComponent";

function App() {
  return (
    <div>
      <TimerComponent />
      {/* <StopComponent /> */}
      {/* <EmailComponent /> */}
      {/* <InputBtnComponent /> */}

      {/* <ExampleUseState /> */}
      {/* <button onClick={() => setVisible(!click)}>{click ? "ON" : "OFF"}</button>
      <ClickComponent click={click} /> */}

      {/* <ClickComponent /> */}
      {/* <BlinkCompnent text="이건 깜빡입니다." /> */}
      {/* <CountComponent /> */}
      {/* <HelloWorld /> */}
      {/* <CaptionImage
          style={{ textAlign: "center" }}
          imgUrl="{이미지 url}"
          caption="이건 트럭이에요."
        />
        <MyButton
          title="네이버로 이동"
          color="green"
          clickUrl="https://www.naver.com"
        /> */}
    </div>
  );
}

export default App;
