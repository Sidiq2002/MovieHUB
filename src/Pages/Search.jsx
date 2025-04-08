import { useSearchParams } from "react-router-dom";
import { Card } from "../Components/Card";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { Footer, Header } from "../Components";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  useEffect(() => {
    document.title = `Search result for ${queryTerm}`;
  });
  return (
    <div>
      <Header />
      <div className="container-fluid ">
        <main className="container search">
          <h5>
            {movies.length == 0
              ? `No result found for ${queryTerm}`
              : `Result for ${queryTerm}`}
          </h5>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
            {movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
