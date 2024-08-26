import React, { useState } from 'react';

const ReportSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [reports, setReports] = useState([
    { id: 1, name: 'John Doe', age: 34, phone: '123-456-7890', tests: [{ name: 'Blood Test', status: 'Completed' }, { name: 'ECG', status: 'Pending' }] },
    { id: 2, name: 'Jane Smith', age: 29, phone: '987-654-3210', tests: [{ name: 'Urine Test', status: 'Pending' }] },
    { id: 3, name: 'Alice Johnson', age: 45, phone: '555-123-4567', tests: [{ name: 'X-ray', status: 'Ready for Download' }] },
  ]);

  const availableTests = ['Blood Test', 'Urine Test', 'ECG', 'X-ray'];

  const handleEditClick = (report) => {
    setSelectedReport(report);
    setIsPopupOpen(true);
  };

  const handleSave = (updatedReport) => {
    setReports(reports.map(report => report.id === updatedReport.id ? updatedReport : report));
    setIsPopupOpen(false);
  };

  const sectionStyle = {
    marginLeft: '285px',
    padding: '20px',
    borderRadius: '5px',
    overflowX: 'auto',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#14750',
    padding: '10px',
    borderBottom: '2px solid #ddd',
    textAlign: 'left',
    fontSize: '1.5em',
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    whiteSpace: 'pre-wrap',
    verticalAlign: 'top',
  };

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const Popup = ({ isOpen, onClose, report, onSave }) => {
    const [formData, setFormData] = useState(report);

    if (!isOpen) return null;

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleTestChange = (e, index) => {
      const { name, value } = e.target;
      const updatedTests = [...formData.tests];
      updatedTests[index][name] = value;
      setFormData({ ...formData, tests: updatedTests });
    };

    const handleTestSelection = (e) => {
      const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
      const selectedTests = selectedOptions.map(testName => {
        const existingTest = formData.tests.find(test => test.name === testName);
        return existingTest || { name: testName, status: 'Pending' };
      });
      setFormData({ ...formData, tests: selectedTests });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };

    const popupStyle = {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '1000',
    };

    const modalStyle = {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
      width: '500px',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      position: 'relative',
    };

    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    };

    const labelStyle = {
      fontWeight: 'bold',
      color: 'black',
    };

    const inputStyle = {
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      width: '100%',
    };

    const selectStyle = {
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      width: '100%',
    };

    const saveButtonStyle = {
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '100%',
      marginTop: '10px',
    };

    const closeButtonStyle = {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
    };

    return (
      <div style={popupStyle}>
        <div style={modalStyle}>
          <button style={closeButtonStyle} onClick={onClose}>X</button>
          <h2 style={{ color: 'black' }}>Edit Report</h2>
          <form style={formStyle} onSubmit={handleSubmit}>
            <div>
              <label style={labelStyle}>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </label>
            </div>
            <div>
              <label style={labelStyle}>
                Age:
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </label>
            </div>
            <div>
              <label style={labelStyle}>
                Phone Number:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </label>
            </div>
            <div>
              <label style={labelStyle}>
                Tests Taken:
                <select
                  multiple
                  value={formData.tests.map(test => test.name)}
                  onChange={handleTestSelection}
                  style={selectStyle}
                >
                  {availableTests.map(test => (
                    <option key={test} value={test}>{test}</option>
                  ))}
                </select>
              </label>
            </div>
            {formData.tests.map((test, index) => (
              <div key={index}>
                <label style={labelStyle}>
                  {test.name} Status:
                  <select
                    name="status"
                    value={test.status}
                    onChange={(e) => handleTestChange(e, index)}
                    style={selectStyle}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </label>
              </div>
            ))}
            <button type="submit" style={saveButtonStyle}>Save</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div style={sectionStyle}>
      <h2 style={{ fontSize: '3em' }}>Reports</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>Phone Number</th>
            <th style={thStyle}>Tests Taken</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td style={tdStyle}>{report.name}</td>
              <td style={tdStyle}>{report.age}</td>
              <td style={tdStyle}>{report.phone}</td>
              <td style={tdStyle}>{report.tests.map(test => test.name).join('\n')}</td>
              <td style={tdStyle}>
                {report.tests.map(test => (
                  // <div key={test.name}>{`${test.name}: ${test.status}`}</div>
                  <div key={test.name}>{`${test.status}`}</div>
                ))}
              </td>
              <td style={tdStyle}>
                <button
                  style={buttonStyle}
                  onClick={() => handleEditClick(report)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        report={selectedReport}
        onSave={handleSave}
      />
    </div>
  );
};

export default ReportSection;
