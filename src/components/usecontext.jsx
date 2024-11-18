import { useContext } from "react";
import { DataContext } from "../App";

const usecontext = () => {
  let contextData = useContext(DataContext);
  return contextData;
};

export default usecontext;
