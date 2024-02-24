import {useState}  from 'react';
import '../assets/AdminDashboard.css';

const AdminDashboard = () => {
  // Sample loans data
  const [loans, setLoans] = useState([
    { id: 1, name: 'Loan 1', period: '5 years', interestRate: '8%' },
    { id: 2, name: 'Loan 2', period: '3 years', interestRate: '6%' },
    { id: 3, name: 'Loan 3', period: '4 years', interestRate: '7.5%' },
    { id: 4, name: 'Loan 4', period: '2 years', interestRate: '5%' },
    { id: 5, name: 'Loan 5', period: '6 years', interestRate: '9%' },
  ]);

  // Function to handle loan rejection
  const handleLoanRejection = (id) => {
    // Filter out the loan with the given id
    const updatedLoans = loans.filter(loan => loan.id !== id);
    setLoans(updatedLoans);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="loan-list">
        {loans.map(loan => (
          <div className="loan-item" key={loan.id}>
            <h2>{loan.name}</h2>
            <p><strong>Period:</strong> {loan.period}</p>
            <p><strong>Interest Rate:</strong> {loan.interestRate}</p>
            <div className="button-group">
              <button>Approve</button>
              <button onClick={() => handleLoanRejection(loan.id)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
