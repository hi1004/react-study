import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const OrderContext = createContext();

export function OrderContextProvider(props) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    total: 0,
  });

  const pricePerItem = useMemo(
    () => ({
      products: 1000,
      options: 500,
    }),
    []
  );
  const calculateSubTotal = useCallback(
    (orderType, orderCounts) => {
      let optionCount = 0;
      for (const count of orderCounts[orderType].values()) {
        optionCount += count;
      }
      return optionCount * pricePerItem[orderType];
    },
    [pricePerItem]
  );

  useEffect(() => {
    const productsTotal = calculateSubTotal('products', orderCounts);
    const optionsTotal = calculateSubTotal('options', orderCounts);
    const total = productsTotal + optionsTotal;
    setTotals({
      products: productsTotal,
      options: optionsTotal,
      total,
    });
  }, [calculateSubTotal, orderCounts]);
  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType) {
      const newOrderCounts = { ...orderCounts };
      const orderCountsMap = orderCounts[orderType];
      orderCountsMap.set(itemName, parseInt(newItemCount));
      setOrderCounts(newOrderCounts);
    }
    function handleReset() {
      setOrderCounts({
        products: new Map(),
        options: new Map(),
      });
      setTotals({
        products: 0,
        options: 0,
        total: 0,
      });
    }

    return [{ ...orderCounts, totals }, updateItemCount, handleReset];
  }, [orderCounts, totals]);
  return <OrderContext.Provider value={value} {...props} />;
}
