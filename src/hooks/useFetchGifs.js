import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  const apiKey = "3ZHGSPXO42jXQ6Ux3sioINy2dLIjwoV2";
  useEffect(() => {
    getGifs(category, apiKey).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};

export default useFetchGifs;
