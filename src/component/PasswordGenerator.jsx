import React, { useState } from 'react'
import { PasswordServices } from '../services/PasswordServices';

let PasswordGenerator = () => {

    let [state, setState] = useState({
        generatedPassword: '',
        passwordLength: '10',
        symbol: false,
        number: false,
        lower: false,
        upper: false
    });

    let updatedInput = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    let updatedChecked = event => {
        setState({
            ...state,
            [event.target.name]: event.target.checked

        });
    }

    let submit = event => {
        event.preventDefault();
        let passwordObj = PasswordServices.getPasswordObj(state);
        let thePassword = PasswordServices.generatePassword(passwordObj, state.passwordLength);
        setState({...state, generatedPassword: thePassword})
    }
    return (
        <>
        
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg ">
                            <div className="card-header bg-warning p-3 ">
                                <p className="h4">Password Generator</p>

                            </div>
                            <div className="card-body bg-warning">
                                <form onSubmit={submit}>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text">Password</span>
                                            <input name='generatedPassword' value={state.generatedPassword} onChange={updatedInput} type='text' className='form-control' placeholder='Generator Password' />
                                            <span className='input-group-text'><i className='fa fa-clipboard'></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <input name='passwordLength' value={state.passwordLength} onChange={updatedInput} type='number' className='form-control' placeholder='Password Length' />
                                            <span className='input-group-text'>Password Length</span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input name='symbol' onChange={updatedChecked} type="checkbox" className="form-check-input" />
                                            </span>
                                            <input  type="text" disabled={true} className="form-control" placeholder='Symobls' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input name='number' onChange={updatedChecked} type="checkbox" className="form-check-input" />
                                            </span>
                                            <input  type="text" disabled={true} className="form-control" placeholder='Numbers' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input name='lower' onChange={updatedChecked} type="checkbox" className="form-check-input" />
                                            </span>
                                            <input type="text" disabled={true} className="form-control" placeholder='LowerCase Letters' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input name='upper' onChange={updatedChecked} type="checkbox" className="form-check-input" />
                                            </span>
                                            <input type="text" disabled={true} className="form-control" placeholder='UpperCase Letters' />
                                        </div>
                                    </div>
                                    <div className="mb-2 mt-2">
                                        <input type="submit" value='Generator' className="btn btn-outline-dark" />

                                    </div>
                                </form>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator