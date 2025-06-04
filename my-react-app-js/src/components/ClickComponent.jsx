import { useEffect, useState } from "react";

export default function ClickComponent({ click }) {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    setShowText((showText) => !showText);
    console.log(showText ? "Toggle is on" : "Toggle is OFF");
  }, [click]);

  return null;
}
