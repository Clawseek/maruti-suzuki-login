import React from 'react';

const InvoiceRow = ({ invoiceNumber, transactionId, billingDate, plan, amount, status }) => (
  <tr>
    <td>{invoiceNumber}</td>
    <td>{transactionId}</td>
    <td>{billingDate}</td>
    <td>{plan}</td>
    <td>{amount}</td>
    <td>
      {status === 'pending' ? (
        <span className="pending">{status}</span>
      ) : (
        <button className="download-button">Download</button>
      )}
    </td>
  </tr>
);

const AccountDetails = () => {
  const invoices = [
    { invoiceNumber: '#2345693', transactionId: '#098-363-623', billingDate: '29 Jan 2025', plan: 'Basic', amount: '₹ 1,200', status: 'download' },
    { invoiceNumber: '#2309593', transactionId: '#117-663-623', billingDate: '23 Jan 2025', plan: 'Pro', amount: '₹ 15,000', status: 'download' },
    { invoiceNumber: '#808-363-623', transactionId: '#808-363-623', billingDate: '06 Feb 2025', plan: 'Basic++', amount: '₹ 3,600', status: 'pending' },
  ];

  return (
    <div className="account-details">
      <header>
        <h1>MARUTI SUZUKI</h1>
        <nav>
          <a href="#">Home</a> / <a href="#">Account Details</a>
        </nav>
      </header>
      <main>
        <section className="welcome-section">
          <h2>Welcome, Amanda Auto,</h2>
          <div className="chatbot-status">
            <span>Multilingual AI ChatBot</span>
            <span className="status active">Active</span>
          </div>
        </section>
        <section className="tabs">
          <button>Service Overview</button>
          <button>Service Amount</button>
          <button>Service Status</button>
          <button>Report</button>
          <button className="active">Invoice</button>
        </section>
        <section className="invoices">
          <h3>My Invoices</h3>
          <p>Total 3 invoices to download</p>
          <table>
            <thead>
              <tr>
                <th>Invoice Number</th>
                <th>Transaction ID</th>
                <th>Billing Date</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <InvoiceRow key={index} {...invoice} />
              ))}
            </tbody>
          </table>
        </section>
        <section className="offers-promotions">
          <h3>Offers & Promotions</h3>
          <div className="promotion">
            <h4>MARUTI SUZUKI REWARDS</h4>
            <p>Make your car ownership easy & convenient. Do it all with one app!</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccountDetails;
