import { useState, useEffect } from "react";
import axios from "axios";

const useUrlLoader = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  });

  return [data, loading];
};

export default useUrlLoader;
