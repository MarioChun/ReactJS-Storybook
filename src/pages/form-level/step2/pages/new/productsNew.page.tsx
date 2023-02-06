import { useState } from "react";
import ProductRepository from "../../ProductRepository";
import { ProductStatus } from "../../types";

type test = {
  name: string;
  status: ProductStatus;
};

const ProductNewPage = () => {
  const [form, setForm] = useState("");
  const [status, setStatus] = useState<ProductStatus>("READY");

  function chageHadle(value: string) {
    setForm(value);
  }

  function changeStatus(value: ProductStatus) {
    setStatus(value);
  }

  return (
    <div>
      <h1>상품등록</h1>
      <div>
        <div>상품명</div>
        <input
          onChange={(event) => {
            chageHadle(event.target.value);
          }}
        ></input>
      </div>
      <div>
        <div>상태</div>
        <input
          type="radio"
          name="status"
          value="READY"
          onChange={() => {
            changeStatus("READY");
          }}
        ></input>
        <div>판매대기</div>
        <input
          type="radio"
          name="status"
          value="ON_SALE"
          onChange={() => {
            changeStatus("ON_SALE");
          }}
        ></input>
        <div>판매중</div>
        <input
          type="radio"
          name="status"
          value="SALE_END"
          onChange={() => {
            changeStatus("SALE_END");
          }}
        ></input>
        <div>판매종료</div>
      </div>
      <div>
        <button>취소</button>
        <button
          onClick={() => {
            // console.log(form, status);
            ProductRepository.create({
              name: form,
              status: status,
              category: "CATEGORY1",
              price: 10000,
              imageUrls: ["https://picsum.photos/200/300"],
            });

            window.location.href = "/products";
          }}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default ProductNewPage;
