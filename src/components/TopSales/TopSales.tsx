import {memo, useEffect, useState} from "react";
import {Title} from "../Title";
import {ItemsList} from "../ItemsList/ItemsList";
// import {Preloader} from "../Preloader";

const url = "http://localhost:7070/api/top-sales";

export const TopSales = memo(() => {
  const [list, setList] = useState([]);

  const getItems = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setList(result);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <Title tag='h2' isCentered>
        Хиты продаж
      </Title>
      {/* <Preloader /> */}
      <ItemsList list={list} />
    </div>
  );
});

TopSales.displayName = "TopSales";
