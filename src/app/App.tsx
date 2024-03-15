import { useQuery } from "react-query";
import axios from "axios";
import "./App.css";

function App() {
  const { data } = useQuery("series", () =>
    axios.get("/series/observations").then((res) => res.data)
  );
  console.log(data);
  return <>{data && JSON.stringify(data)}</>;
}

export default App;
