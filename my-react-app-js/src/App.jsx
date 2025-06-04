import BlinkCompnent from "./components/BlinkComponent";
import CaptionImage from "./components/CaptionImage";
import ClickComponent from "./components/ClickComponent";
import CountComponent from "./components/CountComponent";
import HelloWorld from "./components/HelloWorld";
import MyButton from "./components/MyButton";
import { useEffect, useState } from "react";

function App() {
  const [click, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!click)}>{click ? "ON" : "OFF"}</button>
      <ClickComponent click={click} />

      {/* <BlinkCompnent text="이건 깜빡입니다." />
        <CountComponent />
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
