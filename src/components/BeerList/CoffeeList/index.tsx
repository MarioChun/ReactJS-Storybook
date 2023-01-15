import { useState, useEffect } from "react";
import "./index.scss";
import CoffeeDB from "../db/CoffeeDB";
import ButtonNew from "../../button/ButtonNew";

const CoffeeListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState<string[]>([]);

  const selectByName = (name: string) => {
    return CoffeeDB.selectByName(name).map((item) => item.title);
  };

  const selectByType = (type: string) => {
    return CoffeeDB.selectByType(type).map((item) => item.title);
  };

  const clickSearch = () => {
    setList(selectByName(searchValue));
  };

  const clickShortCut = (value: string) => {
    setList(selectByType(value));
    setSearchValue(value);
  };

  useEffect(() => {
    clickSearch();
  }, []);

  return (
    <div className="common-container">
      <div className="search-container">
        <div className="search-value-container">
          <input
            placeholder="커피의 이름을 입력하세요"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="search-value-input"
          ></input>
          <button className="search-value-btn" onClick={clickSearch}>
            찾기
          </button>
        </div>
        <div className="search-btn-container">
          <label>선택버튼</label>

          {["iced", "hot"].map((item, i) => (
            <ButtonNew
              text={item}
              onClick={() => clickShortCut(item)}
            ></ButtonNew>
          ))}
        </div>
      </div>
      <div className="search-result-list-container">
        <ul className="search-result-list">
          {list.map((item, i) => (
            <li className="coffee-item" key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoffeeListPage;
