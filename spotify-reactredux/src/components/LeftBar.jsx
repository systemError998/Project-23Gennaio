import React from 'react'

import Navbar from '../littleComponents/Navbar'
import SideComments from '../littleComponents/SideComments'

export default function LeftBar() {
    return (
          <>
          <div className="col-2 bg-black  leftBar px-0 rounded-3">
            <div className="d-flex flex-column innerLeft">
                
                <Navbar />

            <div className="bg-black commenti rounded-3 pt-1 overflow-auto">
              <div className="col-12 commenti2 rounded-3 p-3">
                <SideComments />
              </div>
            </div>

            </div>
          </div>
        </>
    )
}
