import styled from "styled-components";
import type {Drink} from "../interfaces/Drinks.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div<{alcoholic: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props) => (props.alcoholic === "Alcoholic" ? 'black' : 'red')};
    color: ${(props) => (props.alcoholic !== "Alcoholic" ? 'black' : 'white')};
    border: 3px #5a0101 solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

//had to fix the h1 not changing colors because it was getting overriden by index.css
const Title = styled.h1<{ alcoholic: string }>`
    color: ${(props) => (props.alcoholic === "Alcoholic" ? 'white' : 'black')};
`;

export default function Cocktails(props : { data:Drink[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((drink: Drink) =>
                    <SingleCharDiv key={drink.idDrink} alcoholic={drink.strAlcoholic}>
                        <Title alcoholic={drink.strAlcoholic}>{drink.strDrink}</Title>
                        <p>{drink.strCategory}</p>
                        <p>{drink.strAlcoholic}</p>
                        <img src={drink.strDrinkThumb} alt={`image of ${drink.strDrink}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}
