import React from 'react'

export default function ProfileBar() {
    return (
        <>
            <div>
                <div className="d-flex mb-3">
                    <div className="freccette me-3 lefty">
                        <i
                            onClick={() => navigate('/album')}
                            className="bi bi-chevron-left rounded-circle" />
                    </div>
                    <div className="freccette righty">
                        <i
                            onClick={() => navigate('/')}
                            className="bi bi-chevron-right rounded-circle" />
                    </div>
                    <div className="ms-auto rigaMobile">
                        <ul className="d-flex me-auto mb-2 mb-lg-0">
                            <li className="nav-item fotoProfilo">
                                <img
                                    className="rounded-circle"
                                    src="https://i.pinimg.com/564x/e7/34/f2/e734f29e0a867b60ccef82d97740aa39.jpg"
                                    alt=""
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </li>
                            <li className="nav-item dropdown-center nomeProfilo">
                                <a
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sarah Linn
                                </a>
                                <ul className="dropdown-menu mt-2">
                                    <li>
                                        <a className="dropdown-item text-white dropMenu" >
                                            Il mio profilo
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-white dropMenu" >
                                            Impostazioni
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider text-white" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-white dropMenu" >
                                            Log Out
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="bottoniMobile d-sm-none">
                            <li className="nav-item">
                                <button className="primo">Tutti</button>
                            </li>
                            <li className="nav-item">
                                <button>Musica</button>
                            </li>
                            <li className="nav-item">
                                <button>Poadcast</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
