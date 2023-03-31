import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Card from "./Card";

const List = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    fetch(
      `https://randomuser.me/api/?page=${page}&results=15&seed=abc&inc=name,picture`
    )
      .then((res) => res.json())
      .then((data) => {
        const userData = data.results.map((item) => ({
          name: item.name.title + " " + item.name.first + " " + item.name.last,
          image: item.picture.thumbnail,
        }));
        setLoading(false);
        setList((lastData) => [...lastData, ...userData]);
      });
  };
  useEffect(loadData, [page]);

  const handleScroll = (e) => {
    const bottom =
      window.innerHeight + document.documentElement.scrollTop + 5 >=
      document.documentElement.scrollHeight;
    if (bottom) {
      setLoading(true);
      setTimeout(
        setPage((lastPage) => lastPage + 1),
        1000
      );
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const user = list.map((item) => {
    return <Card key={nanoid()} name={item.name} image={item.image} />;
  });

  return (
    <div className="list" onScroll={handleScroll}>
      {user.length ? user : null}
      {loading && <h3 className="loading">Loading...</h3>}
    </div>
  );
};

export default List;
