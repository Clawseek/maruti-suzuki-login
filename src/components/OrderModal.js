import React from 'react';

const OrderConfirmation = () => {
    const [orderData, setOrderData] = useState(null);
 
  
    const orderDetailsFunction = async () => {
      try {
        const data = await axios
          .get("https://api.lyrics.ovh/v1/artist/songName")
          .then(res => {
           
            setOrderData(res.data.lyrics);
          })
      } catch (e) {
        console.log(e)
      }
    }

    useEffect(() => {
        orderDetailsFunction()
    }, [])
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Thank you for your order! Your service would start shortly</h2>
      <div style={{ marginTop: '20px' }}>
        <h3>Order Details</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Invoice number</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>1001770045</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Service Purchased</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Basic Plan</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Payment Date</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>03/02/2025</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Unit</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>1</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Payment Amount</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>1092</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderConfirmation;
