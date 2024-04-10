import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Spinner from './components/Loading/Spinner';
import Header from './components/Header/Header';
import './index.css'

const Root = () => {
  const {state} = useNavigation()
  return (
       <>
        <Header/>
          <div>
            {state === 'loading' && (
              <Spinner/>
            )}
              <Outlet/>
          </div>
       </>
  );
};

export default Root;