import React, { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../context/OrderContext';
import axios from 'axios';
import ErrorBanner from '../../components/ErrorBanner';

const CompletePage = ({ setStep }) => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderData, , handleReset] = useContext(OrderContext);

  const handleClick = () => {
    setStep(0);
    handleReset();
  };

  useEffect(() => {
    orderCompleted(orderData);
  }, [orderData]);

  const orderCompleted = async orderData => {
    try {
      const response = await axios.post(
        'http://localhost:4000/order',
        orderData
      );

      setOrderHistory(response.data);
    } catch (error) {
      return <ErrorBanner />;
    } finally {
      setLoading(false);
    }
  };

  const orderTable = orderHistory
    .map(item => (
      <tr key={item.orderNumber}>
        <td>{item.orderNumber}</td>
        <td>{item.price}</td>
      </tr>
    ))
    .reverse();

  if (loading) {
    return <div>...loading</div>;
  } else {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>주문이 성공했습니다.</h2>
        <h2>지금까지 모든 주문</h2>
        <table style={{ margin: 'auto' }}>
          <tbody>
            <tr>
              <th>number</th>
              <th>price</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <br />
        <button onClick={handleClick}>첫 페이지로</button>
      </div>
    );
  }
};

export default CompletePage;
