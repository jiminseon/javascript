import StyledExample from "./components/style/StyledExample";
import StylingComponent from "./components/style/StylingComponent";
import TailwindExample from "./components/style/TailwindExample";
import LazyExample from "./components/LazyExample";

import UserDisplay from "./components/Hoc/UserDisplay";
import withUser from "./components/Hoc/withUser";

const UserDisplayWithUser = withUser(UserDisplay);

function App() {
  return (
    <>
      <UserDisplayWithUser userId={1} />
      <UserDisplayWithUser userId={2} />
      <UserDisplayWithUser userId={3} />
    </>
  );
}

export default App;
