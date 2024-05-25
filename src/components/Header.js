import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToken, removeUser } from "../utils/userSlice";
import {toggleGptView} from "../utils/gptSlice"
import { SUPPORTD_LANGUAGES } from '../utils/constants';
function Header() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
const handleGptClick=()=>{
dispatch(toggleGptView())
}
  const handleSignout = () => {
    localStorage.removeItem("token");
    dispatch(removeToken());
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div className='absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black via-transparent to-transparent  flex justify-between items-center z-50'>
      <img className="w-44 h-16" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Netflix Logo' />
      {token && (
        <div className='flex items-center space-x-4'>
        <select className='bg-black text-white  p-2'>
        {SUPPORTD_LANGUAGES.map((lang)=>{
          return  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
        })}
          
        </select>
          <button onClick={handleGptClick} className='text-white bg-slate-900 p-3 rounded-lg hover:bg-opacity-50 my-3'>GPT Search </button>
          <img className="rounded-lg h-8 w-8" src='data:image/png;base64,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' alt='User Avatar'/>
          <button onClick={handleSignout} className='text-white font-bold hover:underline'>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default Header;
