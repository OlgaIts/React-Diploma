import {memo, useEffect, useState} from "react";
import {Title} from "../../../../components/Title";
import {ItemsList} from "../../../../components/ItemsList/ItemsList";
import {Preloader} from "../../../../components/Preloader";

// const url = "http://localhost:7070/api/top-sales";
const url = import.meta.env.VITE_BASE_API_URL;

export const TopSales = memo(() => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItems = async () => {
    const response = await fetch(`${url}/api/top-sales`);
    // const response = await fetch(url);
    const result = await response.json();
    setList(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getItems();
  }, []);

  if (!list) {
    return [];
  }

  return (
    <div>
      <Title tag='h2' isCentered>
        Хиты продаж
      </Title>
      {isLoading ? <Preloader /> : <ItemsList list={list} />}
    </div>
  );
});

TopSales.displayName = "TopSales";
