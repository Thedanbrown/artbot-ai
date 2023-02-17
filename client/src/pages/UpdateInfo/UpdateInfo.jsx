import React from 'react'
import './updateinfo.css'

const UpdateInfo = () => {

    const handleUpdate = () => {}
    
    return (
        <section className="forms-section">
        <div className="forms">
        <div className="form-wrapper text-center">
                        <p className="">
                            Update User Info
                        </p>
                        <form className="form form-update">
                                    <div className="input-block-update">
                                        <label htmlFor="update-first-name">First Name</label>
                                        <input id="update-first-name" type="text" autoComplete='on' />
                                    </div>
                                    <div className="input-block-update">
                                        <label htmlFor="update-last-name">Last Name</label>
                                        <input id="update-last-name" type="text"  autoComplete='on' />
                                    </div>
                                    <div className="input-block-update">
                                        <label htmlFor="update-email">E-mail</label>
                                        <input id="update-email" type="email"  autoComplete='on' />
                                    </div>
                                    <div className="input-block-update">
                                        <label htmlFor="update-dob">Date of Birth</label>
                                        <input id="update-dob" type="date"  autoComplete='on' />
                                    </div>
                                    <div className="input-block-update">
                                        <label htmlFor="update-password">New Password</label>
                                        <input id="update-password" type="password"  autoComplete='on' />
                                    </div>
                                    <div className="input-block-update">
                                        <label htmlFor="update-password-confirm">Confirm New password</label>
                                        <input id="update-password-confirm" type="password"  autoComplete='on' />
                                    </div>
                            
                        </form>
                        <button type="submit" className="btn-update m-4 px-4 px-4" onClick={handleUpdate}>Submit</button>
                    </div>
                </div>
            </section>
        )
    }

export default UpdateInfo