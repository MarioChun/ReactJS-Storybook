const ProductUdatePage = () => {
  return (
    <div>
      <h1>변경</h1>
      <div>
        <div>상품명</div>
        <input></input>
      </div>
      <div>
        <div>상태</div>
        <input type="radio" name="status" value="READY"></input>
        <div>판매대기</div>
        <input type="radio" name="status" value="ON_SALE"></input>
        <div>판매중</div>
        <input type="radio" name="status" value="SALE_END"></input>
        <div>판매종료</div>
      </div>
      <div>
        <button>취소</button>
        <button>삭제</button>
        <button>저장</button>
      </div>
    </div>
  );
};

export default ProductUdatePage;
