
// // import '../assets/Loans.css';
// // import { getLoans } from '../apifolder/AppUser';
// // const LoansPage = () => {
// //   const loans = [
// //     {
// //       loan_name: "j",
// //       loan_type: "Type A", // Add appropriate loan type
// //       interest: 8,
// //       time_period: 5,
// //       loan_amount: 10000, // Add appropriate loan amount
// //       loan_description: "Description of Loan A" // Add appropriate description
// //     },
// //     {
// //       loan_name: "Loan B",
// //       loan_type: "Type B",
// //       interest: 7.5,
// //       time_period: 7,
// //       loan_amount: 15000,
// //       loan_description: "Description of Loan B"
// //     },
// //     {
// //       loan_name: "Loan B",
// //       loan_type: "Type B",
// //       interest: 7.5,
// //       time_period: 7,
// //       loan_amount: 15000,
// //       loan_description: "Description of Loan B"
// //     },
// //     {
// //       loan_name: "Loan B",
// //       loan_type: "Type B",
// //       interest: 7.5,
// //       time_period: 7,
// //       loan_amount: 15000,
// //       loan_description: "Description of Loan B"
// //     },
// //     {
// //       loan_name: "Loan B",
// //       loan_type: "Type B",
// //       interest: 7.5,
// //       time_period: 7,
// //       loan_amount: 15000,
// //       loan_description: "Description of Loan B"
// //     },
// //     {
// //       loan_name: "Loan B",
// //       loan_type: "Type B",
// //       interest: 7.5,
// //       time_period: 7,
// //       loan_amount: 15000,
// //       loan_description: "Description of Loan B"
// //     },
// //     {
// //       loan_name: "Loan B",
// //       loan_type: "Type B",
// //       interest: 7.5,
// //       time_period: 7,
// //       loan_amount: 15000,
// //       loan_description: "Description of Loan B"
// //     },
// //     // Add more loans as necessary
// //   ];

// //   return (
// //     <div className="interest-loans-container">
// //       {loans.map((loan, index) => (
// //         <div className="interest-loan-item" key={index}>
// //           <h3>{`Loan Title ${index + 1}`}</h3>
// //           <p>Name of Loan: <span>{loan.loan_name}</span></p>
// //           <p>Type of Loan: <span>{loan.loan_type}</span></p>
// //           <p>Interest Rate: <span>{loan.interest}%</span></p>
// //           <p>Period: <span>{loan.time_period} years</span></p>
// //           <p>Loan Amount: <span>{loan.loan_amount}</span></p>
// //           <p>Description: <span>{loan.loan_description}</span></p>
// //           <div className="interest-loan-buttons">
// //             <button>Apply</button>
// //             <button>Check Guidelines</button>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default LoansPage;
// import  { useState, useEffect } from 'react';
// import '../assets/Loans.css';
// import { getLoans } from '../apifolder/AppUser';
// import { getGet } from '../apifolder/AppUser';
// const LoansPage = () => {
//   const [loans, setLoans] = useState([]);
  
//   const applyLoan = () =>
//   {
     
//   }
//   useEffect(() => {
//     fetchLoans();
//   }, []);

//   const fetchLoans = async () => {
//     try {
//       const response = await getLoans();
//       const loansList = response.data;
//       setLoans(loansList);
//     } catch (error) {
//       console.error('Error fetching loans:', error);
//     }
//   };
//    console.log(loans);
//   return (
//     <div className="interest-loans-container">
//       {loans.map((loan, index) => (
//         <div className="interest-loan-item" key={index}>
//           <h3>{`Loan Title ${index + 1}`}</h3>
//           <p>Name of Loan: <span>{loan.loan_name}</span></p>
//           <p>Type of Loan: <span>{loan.loan_type}</span></p>
//           <p>Interest Rate: <span>{loan.interest}%</span></p>
//           <p>Period: <span>{loan.time_period} years</span></p>
//           <p>Loan Amount: <span>{loan.loan_amount}</span></p>
//           {/* <p>Loan Amount: <span>{loan.}</span></p> */}
//           <p>Description: <span>{loan.loan_description}</span></p>
//           <div className="interest-loan-buttons">
//             <button onClick={applyLoan}>Apply</button>
//             <button>Check Guidelines</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default LoansPage;
import { useState, useEffect } from 'react';
import '../assets/Loans.css';
import { getLoans } from '../apifolder/AppUser';
import { getGet } from '../apifolder/AppUser';

const LoansPage = () => {
  const [loans, setLoans] = useState([]);
  
  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const response = await getLoans();
      const loansList = response.data;
      setLoans(loansList);
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  };

  const applyLoan = async (loan_id) => {
    try {
      const id = localStorage.getItem('userID');
      const response1 = await getGet(id,loan_id); 
      if(response1)
        alert('Loan application successful!');
        console.log(loan_id);
      
    } 
    catch (error) {
      console.error('Error applying for loan:', error);
      alert('Failed to apply for the loan.'); // Display an alert if there's an error
    }
  };

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
          <p>Description: <span>{loan.loan_description}</span></p>
          <div className="interest-loan-buttons">
            <button onClick={() => applyLoan(loan.loan_id)}>Apply</button>
            <button>Check Guidelines</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoansPage;
