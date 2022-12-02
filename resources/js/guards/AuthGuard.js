import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from '../services/store.services';

const AuthGuard = observer((props) =>{
  const store = useAppStore()
  if(store.isLoggedIn()){
    return props.children
  }else{
    return <div id="body" className="container">
    </div>
  }
})
export default AuthGuard