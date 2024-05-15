import { useState, useEffect, useRef } from "react";
import axios from "axios";
import config from "@/config/config";

axios.defaults.baseURL = config.SERVER_URL;

const useAxios = (url: string, method: string, payload: any, headers?: any) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request({
          method,
          url,
          data: payload,
          headers: headers ? headers : defaultHeaders,
          signal: controllerRef.current.signal,
          // withCredentials: true
        });

        setData(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { cancel, data, error, loaded };
};

export default useAxios;
