import { useState, useEffect } from "react";
import styles from "./index.module.scss";
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
    <div className={styles.commonContainer}>
      <div className={styles.searchContainer}>
        <div className={styles.searchValueContainer}>
          <input
            placeholder="커피의 이름을 입력하세요"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className={styles.searchValueInput}
          ></input>
          <button className={styles.searchValueBtn} onClick={clickSearch}>
            찾기
          </button>
        </div>
        <div className={styles.searchBtnContainer}>
          <label>선택버튼</label>

          {["iced", "hot"].map((item, i) => (
            <ButtonNew
              text={item}
              onClick={() => clickShortCut(item)}
            ></ButtonNew>
          ))}
        </div>
      </div>
      <div className={styles.searchResultListContainer}>
        <ul className={styles.searchResultList}>
          {list.map((item, i) => (
            <li className={styles.coffeeItem} key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoffeeListPage;
