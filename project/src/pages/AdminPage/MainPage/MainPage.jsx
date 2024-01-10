import React from 'react';

const MainPage = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column', // Updated to column for vertical stacking
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      textAlign: 'center',
    },

    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },

    searchContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      marginBottom: '10px', // Added margin for better spacing
    },

    searchInput: {
      padding: '5px',
    },

    piUsers: {
      width: '100px',
      height: '80px', // Adjusted height to accommodate additional information
      backgroundColor: 'green', // Set your desired color here
      margin: '5px',
      padding: '10px',
      color: 'white',
    },
  };

  const piData = Array(20)
    .fill(null)
    .map((_, index) => ({
      name: `Pi${index + 1} Name`,
      location: `Location${index + 1}`,
      id: `ID${index + 1}`,
    }));

  return (
    <>
      <div style={styles.container}>
        <div style={styles.heading}>List of all Pi's</div>
        <div style={styles.searchContainer}>
          <input type="text" placeholder="Search..." style={styles.searchInput} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {piData.map((pi, index) => (
            <div key={index} style={styles.piUsers}>
              <p>{pi.name}</p>
              <p>{pi.location}</p>
              <p>{pi.id}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
