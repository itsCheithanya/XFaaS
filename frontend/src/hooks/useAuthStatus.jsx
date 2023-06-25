import { useState, useEffect } from "react";
import {PassageUser}  from '@passageidentity/passage-auth/passage-user';
// import { useDispatch } from "react-redux";
// import { setLogin,setLogout } from "../state";

export function useAuthStatus() {
  // const dispatch=useDispatch();
  const [result, setResult] = useState({
    isLoading: true,
    isAuthorized: false,
    username: "",
  });

  useEffect(() => {
    let cancelRequest = false;
    new PassageUser().userInfo().then(userInfo=> {
      if( cancelRequest ) {
          return;
      }
      if(userInfo === undefined){
          setResult({
              isLoading: false,
              isAuthorized: false,
              username: "",
            });
            // dispatch(setLogout())
            return;
         
      }
      const username = userInfo.email ? userInfo.email : userInfo.phone;
      setResult({
          isLoading: false,
          isAuthorized: true,
          username,
        });
        // dispatch(setLogin({
        //   user:username,

        // }));

    });
    return () => {
      cancelRequest = true;
    };
  }, []);
  return [result,setResult];
}