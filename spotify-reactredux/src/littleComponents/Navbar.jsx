import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()

  return (
    <>    
            <div className="menu h6 border-1 border-danger rounded-3">
                <div className="col-12 px-0">
                    <ul className="firstUl list-unstyled d-flex flex-column ">
                        <li>
                            <a  
                                onClick={() => navigate('/')}
                                className="text-decoration-none btn d-flex align-items-center"
                            >
                                <i className="bi bi-house-door-fill SizeBtn d-flex justify-content-center" />
                                <span className="scritta ps-3">Home</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate('/search')}
                                className="text-decoration-none btn d-flex align-items-center"
                            >
                                <i
                                    className="bi bi-search SizeBtn
                                      d-flex justify-content-center "
                                />
                                <span className="scritta ps-3">Cerca</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    </>
  )
}
