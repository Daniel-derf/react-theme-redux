import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/themeSlice";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.value);

  return (
    <>
      <h1>Theme: {theme}</h1>
      <button onClick={() => dispatch(toggleTheme())}>TOGGLE THEME</button>
    </>
  );
}

export default App;
