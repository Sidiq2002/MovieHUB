import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const Key = "9d473a3536fad72fda818a2e6de9719a";
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${Key}&query=${queryTerm}`;
  useEffect(() => {
    async function handleFetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setData(jsonData.results));
    }
    handleFetchMovies();
  }, [url]);
  return { data };
};
