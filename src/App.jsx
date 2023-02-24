import Login from "./components/login";
import Home from "./components/home";
import useToken from "./utilities/useToken";

function App() {
  const [_, isAuth] = useToken();
  // to-do: use React router?
  return (isAuth ? <Home /> : <Login />);
}

export default App;
