import React from 'react'
import Ringtonecard from '../components/Ringtonecard'
import Search from '../components/Search'

const OwnedRingtones = () => {


  return (

    <>
            <div className='container' >
                <Search/>

                <Ringtonecard isdownload={true}/>
                <Ringtonecard isdownload={true}/>
                <Ringtonecard isdownload={true}/>

                <Ringtonecard isdownload={true}/>
            </div>
    </>
    
  )
}

export default OwnedRingtones