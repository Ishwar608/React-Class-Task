import axios from "axios";


export  const postRegistrati = (data) => {
    // debugger;
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch({ type: 'START' });
      // Return promise with success and failure actions
      return axios.post('https://real-pear-fly-kilt.cyclic.app/accounts/authenticate',data).then(  
        user => dispatch({ type: 'SUC', payload: user }),
        err => dispatch({ type: 'FAIL', payload :  err })
      );
    };
  };