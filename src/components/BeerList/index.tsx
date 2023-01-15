import "./index.scss";
import { useEffect, useState } from "react";
import CocktailDB from "./db/CocktailDB";

const BeerListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState<string[]>([]);
  // const list: string[] = [
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  //   "맥주이름",
  // ];

  // const handleClickSearch = () => alert("검색");

  const handleClickSearch = () => {
    const list = CocktailDB.selectByName(searchValue).map(
      (item) => item.strDrink
    );
    setList(list);
  };

  useEffect(() => {
    handleClickSearch();
  }, []);

  return (
    <div>
      <div className="list-search-container">
        <div className="search-value-container">
          <input
            className="search-input"
            placeholder="맥주의 이름을 입력하세요"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button className="search-button" onClick={handleClickSearch}>
            search
          </button>
        </div>
        <div className="shortcut-button-container">
          <label>나라선택</label>
          <button
            className="shortcut-button"
            onClick={() => alert("한국산 클릭!")}
          >
            한국산
          </button>
          <button
            className="shortcut-button"
            onClick={() => alert("일본산 클릭!")}
          >
            일본산
          </button>
          <button
            className="shortcut-button"
            onClick={() => alert("미국산 클릭!")}
          >
            미국산
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

export default BeerListPage;
