import moment from 'moment';
import React from 'react';
import Logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={Logo} alt="" />
                <p className='text-seconndary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;