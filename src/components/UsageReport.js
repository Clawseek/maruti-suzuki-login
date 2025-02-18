import React from 'react';
import { Table, Button, Tabs, Tab, Badge } from 'react-bootstrap';

const UsageReport = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center my-4">
        <h1>Welcome, Amanda Auto</h1>
        <Badge variant="success">Active</Badge>
      </header>
      <h2>Multilingual AI ChatBot</h2>
      <Tabs defaultActiveKey="report" id="uncontrolled-tab-example">
        <Tab eventKey="service-overview" title="Service Overview">
          {/* Service Overview Content */}
        </Tab>
        <Tab eventKey="service-amount" title="Service Amount">
          {/* Service Amount Content */}
        </Tab>
        <Tab eventKey="service-status" title="Service Status">
          {/* Service Status Content */}
        </Tab>
        <Tab eventKey="report" title="Report">
          <div className="my-4">
            <h3>Usage Reports</h3>
            <div className="d-flex justify-content-between align-items-center my-2">
              <div>
                <label htmlFor="report-type">Report Type:</label>
                <select id="report-type" className="ml-2">
                  <option value="usage-report">Usage Report</option>
                  {/* Other options */}
                </select>
                <Button variant="primary" className="ml-2">Apply</Button>
              </div>
              <div>
                <Button variant="outline-primary" className="mr-2">Export to Excel</Button>
                <Button variant="outline-primary">Export to PDF</Button>
              </div>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Plan Name</th>
                  <th>Cost of Plan</th>
                  <th>Initial Recharge</th>
                  <th>Usage</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Basic</td>
                  <td>900</td>
                  <td>90 Minutes</td>
                  <td>43 Minutes</td>
                  <td>57 Minutes</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Basic ++</td>
                  <td>3600</td>
                  <td>130 Minutes</td>
                  <td>94 Minutes</td>
                  <td>36 Minutes</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Basic</td>
                  <td>900</td>
                  <td>90 Minutes</td>
                  <td>43 Minutes</td>
                  <td>57 Minutes</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Basic ++</td>
                  <td>3600</td>
                  <td>130 Minutes</td>
                  <td>94 Minutes</td>
                  <td>36 Minutes</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Basic</td>
                  <td>900</td>
                  <td>90 Minutes</td>
                  <td>43 Minutes</td>
                  <td>57 Minutes</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab eventKey="invoice" title="Invoice">
          {/* Invoice Content */}
        </Tab>
      </Tabs>
      <aside className="mt-4">
        <h4>Offers & Promotions</h4>
        <div className="promotion">
          <img src="maruti-suzuki-rewards.jpg" alt="Maruti Suzuki Rewards" />
          <p>Make your car ownership easy & convenient. Do it all with one app!</p>
        </div>
      </aside>
    </div>
  );
};

export default UsageReport;
