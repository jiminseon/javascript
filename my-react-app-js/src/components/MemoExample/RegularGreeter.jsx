// .js 또는 .jsx 파일에서

import { memo } from "react";

export function RegularGreeter({ name }) {
  console.log(`RegularGreeter (${name}) is rendering!`);
  return <p>Hello, {name}! (Regular)</p>;
}

export const MemoizedGreeter = memo(({ name }) => {
  console.log(`MemoizedGreeter (${name}) is rendering!`);
  return <p>Hello, {name}! (Memoized)</p>;
});
