import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './reset2024.css'
import '@radix-ui/themes/styles.css';
import { Portfolio } from './Portfolio.jsx'

import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme appearance="inherit"  accentColor="violet" grayColor='olive'  >
        <Portfolio />
        {/* <ThemePanel/> */}

      </Theme>
    </BrowserRouter>
  </React.StrictMode >
)
// < Theme >