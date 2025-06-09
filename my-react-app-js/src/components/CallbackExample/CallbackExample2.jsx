import { useCallback, useState } from "react";

export default function CallbackExample2() {
  const [state, setState] = useState("");

  const onInputChange = (e) => {
    setState(e.target.value);
    console.log(state);
  };

  const onSubmit = useCallback(() => {
    console.log("submit:", state);
  }, []); //[] -> 처음 랜더링 됐을 때만 만들고 다시 정의하지 않겠다는 의미 -> state = ""
  // [state]

  const onSubmit2 = useMemo(() => {
    return () => {
      console.log("submit", state);
    };
  }, [state]);

  return (
    <div>
      <input type="text" value={state} onChange={onInputChange} />

      <button onClick={onSubmit}>입력</button>
    </div>
  );
}
