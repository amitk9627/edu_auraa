import React from 'react'
import Container from '../../components/Container/Container'
import Sidebar from './Sidebar'

const Profile = ({children}) => {
    
  return (
    <Container>
    <div className="py-8">
      <div className="font-bold text-[28px] text-[#000000] pb-8">
        Profile Settings
      </div>
      <div className="flex gap-10">
        <section name="sideBar" className="w-[22%]"><Sidebar/></section>
        <section className="w-[78%] h-full" name="form">
          {children}
        </section>
      </div>
    </div>
  </Container>
  )
}

export default Profile