import { useEffect, useState } from 'react';
import { getUserLoansById } from '../apifolder/AppUser';

const CenterPage = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchUserLoans = async () => {
      try {
        const id = localStorage.getItem('userID');
        const userLoansResponse = await getUserLoansById(id);
        console.log(await getUserLoansById(id));
        // Check if userLoansResponse.data is an array before mapping over it
        if (Array.isArray(userLoansResponse.data)) {
          const userLoans = userLoansResponse.data.map(item => ({
            ...item.loan,
            status: item.status // Add status property to each loan object
          }));
          setLoans(userLoans);
        } else {
          console.error('Invalid response format - missing data array:', userLoansResponse);
        }
      } catch (error) {
        console.error('Error fetching user loans:', error);
      }
    };

    fetchUserLoans();
  }, []);

  return (
    <div className="interest-loans-container">
      {loans.map((loan, index) => (
        <div className="interest-loan-item" key={index}>
          <h3>{`Loan Title ${index + 1}`}</h3>
          <p>Name of Loan: <span>{loan.loan_name}</span></p>
          <p>Type of Loan: <span>{loan.loan_type}</span></p>
          <p>Interest Rate: <span>{loan.interest}%</span></p>
          <p>Period: <span>{loan.time_period} years</span></p>
          <p>Loan Amount: <span>{loan.loan_amount}</span></p>
          <p>Status: <span>{loan.status||'Pending'}</span></p> {/* Display status */}
          <p>Description: <span>{loan.loan_description}</span></p>
        </div>
      ))}
    </div>
  );
};

export default CenterPage;
