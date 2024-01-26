import React from 'react'

export default function Playlist({url1,url2,url3,url4,titlePlaylist}) {
    return (
        <>
            <div
                className="card mb-3"
                style={{ width: "31%" }}
            >
                <div className="row g-0">
                    <div className="col-3 rounded-start overflow-hidden">
                        <div className="h-100">
                            <div className="d-flex w-100 h-50 rounded-start">
                                <img
                                    src={url1}
                                    className="img-fluid "
                                    style={{ width: "50%" }}
                                    alt="..."
                                />
                                <img
                                    src={url2}
                                    className="img-fluid "
                                    style={{ width: "50%" }}
                                    alt="..."
                                />
                            </div>
                            <div className="d-flex w-100 h-50">
                                <img
                                    src={url3}
                                    className="img-fluid "
                                    style={{ width: "50%" }}
                                    alt="..."
                                />
                                <img
                                    src={url4}
                                    className="img-fluid "
                                    style={{ width: "50%" }}
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-9 body rounded-end-1">
                        <p className="truncate-text mb-0">{titlePlaylist}</p>
                    </div>
                    <button className="playHover position-absolute">
                        <i className="bi bi-play-fill" />
                    </button>
                </div>
            </div>
        </>
    )
}
