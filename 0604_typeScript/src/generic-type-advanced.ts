interface State {
  id: number;
  name: string;
  nickname?: string;
}

function useState<T>(arg: T): T {
  return arg;
}

const state = useState({
  id: 10,
  name: "이름",
});

const state2 = useState<State>({
  id: 10,
  name: "이름",
});
