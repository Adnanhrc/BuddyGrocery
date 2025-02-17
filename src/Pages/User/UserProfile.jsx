import React from 'react'
import { useParams } from 'react-router-dom'
import Footer1 from '../../Components/Footer/Footer1'
import Footer2 from '../../Components/Footer/Footer2'
import Navbar from '../../Components/Navbar/Navbar'
import SingleBanner from '../../Components/Banners/SingleBanner'
import UserSidebar from '../../Components/UserProfile/UserSidebar'
// import AccountSettings from '../../Components/UserProfile/AccountSettings'
import AccountSettings from '../../Components/UserProfile/AccountSettings'
import './UserProfile.css'
import ChangePassword from '../../Components/UserProfile/ChangePassword'
import YourOrders from '../../Components/UserProfile/YourOrders'
import UserAddress from '../../Components/UserProfile/UserAddress'
import LegalNotice from '../../Components/UserProfile/LegalNotice'

const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
  return (
    <div className='userprofile'>
        <Navbar/>
        <SingleBanner 
        heading={`My Profile`}
        bannerimage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
        />
        {/* UserProfile , showing {activepage}
         */}

         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings/>}
              {activepage === 'changepassword' && <ChangePassword/>}
              {activepage === 'yourorders' && <YourOrders/>}
              {activepage === 'address' && <UserAddress/>}
              {activepage === 'legalnotice' && <LegalNotice/>}
            </div>
         </div>
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default UserProfile
