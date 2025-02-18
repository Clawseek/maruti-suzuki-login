import React from 'react';
import axios from 'axios';
import  { useState,useEffect } from "react";
const ConfirmationDialog = () => {
    const [invoiceDetails, setInvoiceDetails] = useState(null);
 
  
    const invoiceDetailsFunction = async () => {
      try {
        const data = await axios
          .get("https://api.lyrics.ovh/v1/artist/songName")
          .then(res => {
           
            setInvoiceDetails(res.data.lyrics);
          })
      } catch (e) {
        console.log(e)
      }
    }

    useEffect(() => {
        invoiceDetailsFunction()
    }, [])
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', width: '400px', padding: '20px', backgroundColor: '#fff' }}>
      <h2>Thank you for your purchase on 31st Jan 2025 for AI Chat Bot Service.</h2>
      <h3>Payment Details</h3>
      <div>
        <h4>Invoice Details</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td>Service Name</td>
              <td>"1122"</td>
            </tr>
            <tr>
              <td>Purchase Date</td>
              <td>31/01/2025</td>
            </tr>
            <tr>
              <td>Unit Price</td>
              <td>1,000</td>
            </tr>
            <tr>
              <td>GST%</td>
              <td>18</td>
            </tr>
            <tr>
              <td>GST Amount</td>
              <td>192</td>
            </tr>
            <tr>
              <td>Total Amount</td>
              <td>1,092</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button style={{ backgroundColor: '#f44336', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Cancel</button>
        <button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;

