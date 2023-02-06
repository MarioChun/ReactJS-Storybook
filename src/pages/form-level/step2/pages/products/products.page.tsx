const ProductPage = () => {
  return (
    <div>
      <h1>페이지</h1>
      <div
        onClick={() => {
          window.location.href = "/products/new";
        }}
      >
        등록
      </div>
      <div>1/상품명</div>
      <div>2/상품명</div>
      <div>3/상품명</div>
    </div>
  );
};

export default ProductPage;
