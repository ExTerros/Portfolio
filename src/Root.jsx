import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Spinner from './components/Loading/Spinner';

const Root = () => {
  const {state} = useNavigation()
  return (
    <div>
        <div className="container">
          {state === 'loading' && (
            <Spinner/>
          )}
            <Outlet/>
        </div>
    </div>
  );
};

export default Root;