function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        {displayAssets && displayAssets.length > 0 && (
          <div>
            <img
              src={displayAssets[0].full_background}
              alt={displayName}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price.finalPrice} RUB
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
