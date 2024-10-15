import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function Alert() {
  const { alertName: displayName = "", closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayName]);

  return (
    <div id="toast-container">
      <div className="toast">{displayName} добавлен в корзину</div>
    </div>
  );
}

export { Alert };
