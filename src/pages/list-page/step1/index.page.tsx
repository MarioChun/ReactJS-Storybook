import { useEffect, useState } from "react";
import "./index.css";
import CocktailDB from "./db/CocktailDB";

const CocktailListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState<string[]>([]);

  const selectByName = (name: string) => {
    return CocktailDB.selectByName(name).map((item) => item.strDrink);
  };

  const handleClickSearch = () => {
    setList(selectByName(searchValue));
  };

  const handleClickShortCut = (value: string) => {
    setList(selectByName(value));
    setSearchValue(value);
  };

  useEffect(() => {
    handleClickSearch();
  }, []);

  return (
    <div className="container">
      <div className="list-search-container">
        <div className="search-value-container">
          <input
            className="search-input"
            placeholder="음료의 이름을 입력하세요"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <button className="search-button" onClick={handleClickSearch}>
            search
          </button>
        </div>
        <div className="shortcut-button-container">
          <label>빠른검색</label>
          <button
            className="shortcut-button"
            onClick={() => {
              handleClickShortCut("Vodka");
            }}
          >
            Vodka
          </button>
          <button
            className="shortcut-button"
            onClick={() => {
              handleClickShortCut("Martini");
            }}
          >
            Martini
          </button>
          <button
            className="shortcut-button"
            onClick={() => {
              handleClickShortCut("Blue");
            }}
          >
            Blue
          </button>
        </div>
      </div>
      <div className="list-search-result">
        <ul className="list-container">
          {list.map((item, i) => (
            <li key={i}>
              <u className="drink-item">{item}</u>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CocktailListPage;
