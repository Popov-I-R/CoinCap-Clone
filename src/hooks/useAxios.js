import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAxios = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  function handleError() {
  navigate("*")
}

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
        //   signal: controller.signal,
        });
        
        setResponse(res.data.data.coins);

      } catch (err) {
            handleError()
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // useEffect cleanup function
    return () => controller.abort();
  }, []);

  return [response, error, loading];
};
export default useAxios;
