import Cocktails from "./components/Cocktails.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Drink} from "./interfaces/Drinks.ts";

const ParentDiv=styled.div`
  width: 80vw;
  margin: auto;
  border: 5px #0dd6b8 solid;
`;

export default function App(){

  const [data, setData] = useState<Drink[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
      const {drinks} : {drinks: Drink[]} = await rawData.json();
      setData(drinks);
    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, []);

  return(
      <ParentDiv>
        <Cocktails data={data}/>
      </ParentDiv>
  )
}
