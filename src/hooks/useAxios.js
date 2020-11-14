import axios from "axios";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function useAxios(url) {
  const [data, setData] = useState([]);

  async function getData(extendedUrl = "") {
    const result = await axios.get(`${url}/${extendedUrl}`);
    const newData = {...result.data, id: uuid()};
    setData(data => [...data, newData]);
  }

  return [data, getData]
}

export default useAxios;