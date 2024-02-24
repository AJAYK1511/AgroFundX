// import { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import '../assets/DashBoard.css';

const AgricultureDashboard = () => {
  const farmerDetails = {
    name: 'John Doe',
    farmerId: 'F123456',
    totalLoansApplied: 5,
    loansApproved: 3,
    applicableLoans: ['Crop Loan', 'Equipment Loan', 'Insurance Loan'],
    totalLoanAmount: 250000
  };

  const sampleLoans = [
    { name: 'Farm Equipment Loan', period: '5 years', interestRate: '8%', id: 'eq-loan' },
    { name: 'Crop Insurance Loan', period: '1 year', interestRate: '5%', id: 'ci-loan' },
    { name: 'Livestock Loan', period: '3 years', interestRate: '7.5%', id: 'ls-loan' }
  ];

  return (
    <>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Agriculture Loan System Dashboard</h1>
        <div className="dashboard-summary">
            <div className="farmer-details">
              <h2>Farmer Details</h2>
              <p><strong>Name:</strong> {farmerDetails.name}</p>
              <p><strong>Farmer ID:</strong> {farmerDetails.farmerId}</p>
            </div>
            <div className="loan-details">
             <h2>Loan Details</h2>
             <p><strong>Total Loans Applied:</strong> {farmerDetails.totalLoansApplied}</p>
              <p><strong>Loans Approved:</strong> {farmerDetails.loansApproved}</p>
              <p><strong>Applicable Loans:</strong></p>
              <ul>
                {farmerDetails.applicableLoans.map((loan, index) => (
                <li key={index}>{loan}</li>
              ))}
            </ul>
            <p><strong>Total Loan Amount:</strong> Rs. {farmerDetails.totalLoanAmount}</p>
          </div>
        </div>
        <div className='barchartfarm'>
        <h2>Chart on Farmers Income in Financial Year 2023</h2>
           <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
            ]}
            height={290}
            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
          <p>Chart on Farmers Income in Financial Year 2023: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="row-container">
          <div className='sparklinefarm'>
        <h2>Bar Graph showing the peak and down on production of crops in the last financial year</h2>
             <Box sx={{ flexGrow: 1 }}>
              <SparkLineChart plotType="bar" data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
             </Box>
             <p>Bar Graph showing the peak and down on production of crops in the last financial year: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           </div>
           <div className='sparklinefarm'>
             <h2>Line showing the peak and down on production of crops in the last financial year</h2>
             <Box sx={{ flexGrow: 1 }}>
               <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
             </Box>
             <p>Line showing the peak and down on production of crops in the last financial year: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div></div>
        <div className="dashuser-sample-loans">
          <h2>Sample Loans</h2>
          {sampleLoans.map((loan, index) => (
            <div className="dashuser-loan-card" key={index}>
              <h3>{loan.name}</h3>
              <p><strong>Period:</strong> {loan.period}</p>
              <p><strong>Interest Rate:</strong> {loan.interestRate}</p>
              <div className="dashuser-button-group">
                <button>Apply</button>
                <button className="dashuser-details-button">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default AgricultureDashboard;
