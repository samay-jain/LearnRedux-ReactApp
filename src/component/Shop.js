import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

const Shop = () => {
    const balance = useSelector(state=>state.amount);
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
        <h2 className='my-2'>Deposit or Withdraw Money anytime anywhere</h2>
        
        {/* <button onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}} className="btn btn-primary mx-2">-</button>
        Update Balance
        <button onClick={()=>{dispatch(actionCreators.depositMoney(100))}} className="btn btn-primary mx-2">+</button>
         */}
        
        <button onClick={()=>{withdrawMoney(100)}} className="btn btn-primary mx-2">-</button>
        Update Balance: <strong>{balance}</strong>
        <button onClick={()=>{depositMoney(100)}} className="btn btn-primary mx-2">+</button>
    </div>
  )
}

export default Shop
