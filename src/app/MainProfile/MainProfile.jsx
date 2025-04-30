import React from 'react'
import Gallery from '../../components/MainProfile/Gallery';
import Overview from '../../components/MainProfile/Overview';
import HeaderSearchBar from "../../components/MainProfile/HeaderSearchBar";
const MainProfile = () => {
  return (
    <div>
      <div className='bg-[#F4F4F4] py-[24px]'>
      <HeaderSearchBar />
      </div>
      <Gallery />
      <Overview />
    </div>
  )
}

export default MainProfile
