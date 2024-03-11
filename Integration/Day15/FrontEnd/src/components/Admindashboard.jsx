import { useEffect, useState } from 'react';

import { approveLoans, getPendingLoans } from '../apifolder/Admin'; // Import the approveLoans function
import '../assets/AdminDashboard.css';

const AdminDashboard = () => {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState(null);
  const [change,setChange]=useState(true);

  useEffect(() => {
    const fetchPendingLoans = async () => {
      try {
        const response = await getPendingLoans();
        console.log('Response from API:', response);
        const pendingLoans = response.data; // Extract the 'data' property
        console.log('Pending loans fetched from API:', pendingLoans);
        setLoans(pendingLoans);
      } catch (error) {
        console.error('Error fetching pending loans:', error);
        setError(error.message || 'Error fetching pending loans');
      }
    };

    fetchPendingLoans();
  }, [change]);

  const handleApprove = async (id) => {
    try {
      console.log(id);
      await approveLoans(id);
      setChange(!change);
    } catch (error) {
      console.error('Error approving loan:', error);
      // Handle error appropriately, e.g., display an error message
    }
  };

  const handleLoanRejection = (id) => {
    // Filter out the loan with the given id
    const updatedLoans = loans.filter(loan => loan.id !== id);
    console.log('Updated loans after rejection:', updatedLoans);
    setLoans(updatedLoans);
  };

  console.log('Current loans state:', loans);

  return (
    <div className='wholedash'>
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        {error && <p>Error: {error}</p>}
        <div className="loan-list">
          {loans.map(loan => (
            <div className="loan-item" key={loan.id}>
              <h2>Loan Name {loan.loans.loan_name}</h2>
              <p><strong>User name:</strong> {loan.farmuser.userInfo.name}</p>
              <p><strong>User Email:</strong> {loan.farmuser.email}</p>
              <p><strong>Interest Rate:</strong> {loan.loans.interest}</p>
              <p><strong>Status:</strong> {"pending"}</p>
              <div>
                <button className='buttonfordash' onClick={() => handleApprove(loan.user_loanid)}>Approve</button>
                <button className="buttonfordash" onClick={() => handleLoanRejection(loan.id)}>Reject</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
