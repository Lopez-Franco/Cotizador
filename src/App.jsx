import React from "react";
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage'
import { useGet } from './utils/api/api';
import { InsuranceContext } from './utils/InsuranceContext';
import './components/styles/loading.css'

function App(){
  const [data, error, isLoading] = useGet();

  if (error) return <ErrorPage/>
  if (isLoading) return <div className="spinnerLoading"></div>
  return(
    <InsuranceContext.Provider value={data}>
      <Layout/>
    </InsuranceContext.Provider>    
  )
}


export default App;
