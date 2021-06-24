import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Main />
    </>
  );
}
