import axios from "axios";
import { useEffect, useState } from "react";

let useFetch = (url) => {
  console.log("i am useFetch");
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState("");
  let [state, setState] = useState(0);
  let readData = async () => {
    try {
      let result = await axios({
        url: url,
        method: "get",
      });

      setIsLoading(false);
      // setData(result.data.data.results);
      setData(result.data.data.results);
      setError("");
    } catch (error) {
      setIsLoading(false);
      setData(null);
      setError("Unable to fetch data");
    }
  };

  useEffect(() => {
    readData();
  }, [url, state]);

  console.log("**********", data);

  return {
    data: data,
    isLoading: isLoading,
    error: error,
    setState,
  };
};

export default useFetch;
