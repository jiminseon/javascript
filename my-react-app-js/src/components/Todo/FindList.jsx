import FindItem from "./FindItem";
import { useTodo } from "./TodoProvider";

export default function FindList() {
  const ctx = useTodo();
  return (
    <div>
      <h3>Find Items</h3>
      <div>
        {ctx.findArr.map((elem, index) => (
          <FindItem key={index} text={elem.text} color={elem.color} />
        ))}
      </div>
    </div>
  );
}
