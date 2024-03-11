import '../assets/FundAlloc.css'; // Import the CSS file

const FundAllocationTable = () => {
  const rows = [
    { state: 'Uttar Pradesh', allocation: 12831 },
    { state: 'Rajasthan', allocation: 9015 },
    { state: 'Maharashtra', allocation: 8460 },
    { state: 'Madhya Pradesh', allocation: 7440 },
    { state: 'Gujarat', allocation: 7282 },
    { state: 'West Bengal', allocation: 7260 },
    { state: 'Andhra Pradesh', allocation: 6540 },
    { state: 'Tamil Nadu', allocation: 5990 },
    { state: 'Punjab', allocation: 4713 },
    { state: 'Karnataka', allocation: 4525 },
    { state: 'Bihar', allocation: 3980 },
    { state: 'Haryana', allocation: 3900 },
    { state: 'Telangana', allocation: 3075 },
    { state: 'Kerala', allocation: 2520 },
    { state: 'Odisha', allocation: 2500 },
    { state: 'Assam', allocation: 2050 },
    { state: 'Chhattisgarh', allocation: 1990 },
    { state: 'Jharkhand', allocation: 1445 },
    { state: 'Himachal Pradesh', allocation: 925 },
    { state: 'Jammu & Kashmir &Ladakh', allocation: 900 },
    { state: 'Uttarakhand', allocation: 785 },
    { state: 'Tripura', allocation: 360 },
    { state: 'Arunachal Pradesh', allocation: 290 },
    { state: 'Nagaland', allocation: 230 },
    { state: 'Manipur', allocation: 200 },
    { state: 'Mizoram', allocation: 196 },
    { state: 'Meghalaya', allocation: 190 },
    { state: 'Goa', allocation: 110 },
    { state: 'Delhi', allocation: 102 },
    { state: 'Sikkim', allocation: 56 },
    { state: 'Puducherry', allocation: 48 },
    { state: 'A & N Islands', allocation: 40 },
    { state: 'Daman & Diu', allocation: 22 },
    { state: 'Lakshadweep', allocation: 11 },
    { state: 'Dadra & Nagar Haveli', allocation: 10 },
    { state: 'Chandigarh', allocation: 9 }
  ];

  return (
    <>
    <div className='NewTable'>
    <center>
    <div className='fundtable'>
      <div className='headofta'>
    <strong>Fund Allocation Details for Each State</strong></div>
    <table className="custom-table">
      <thead>
        <tr>
          <th className="custom-header">S No.</th>
          <th className="custom-header">State/UT</th>
          <th className="custom-header">Tentative Fund Allocation (Rs. Cr)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="custom-row">
            <td className="custom-cell">{index + 1}</td>
            <td className="custom-cell">{row.state}</td>
            <td className="custom-cell">{row.allocation}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </center></div></>
  );
};

export default FundAllocationTable;

    
  