import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAxiosGlobal = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function handleError() {
    navigate("*");
  }

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
        });
        setResponse(res.data.data);
      } catch (err) {
        handleError();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [response, error, loading];
};
export default useAxiosGlobal;
