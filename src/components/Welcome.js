import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const BoxContainer = styled('div')(({ theme }) => ({
  width: '70%',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  opacity: 0,
  transition: 'opacity 1s ease',
}));

const Welcome = () => {
    const [showText, setShowText] = useState(false);
  
    useEffect(() => {
      // Delay the appearance of the text
      const timer = setTimeout(() => {
        setShowText(true);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <ThemeProvider theme={createTheme({ palette: { mode: 'light' } })}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            marginLeft: '29%',
            marginRight: '25%',
          }}
        >
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <BoxContainer style={{ opacity: showText ? 1 : 0 }}>
              {showText && (
                <h1 style={{ fontSize: '40px', color: 'blue' }}>Manage your workflows</h1>
              )}
            </BoxContainer>
          </div>
        </div>
      </ThemeProvider>
    );
  };
  

export default Welcome;
