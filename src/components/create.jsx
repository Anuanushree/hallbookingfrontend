import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigater from '../nav/nav';

function Create({ BASE_URL }) {

    const [hallName, setName] = useState('');
    const [seat, setSeat] = useState('');
    const [amenties, setAmenties] = useState('');
    const [phn, setPhn] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const token = localStorage.getItem('token');
    console.log(token);

    const navigate = useNavigate();
    const handlesubmit = async (event) => {
        event.preventDefault();

        const headers = {
            headers: { "authorization": `${token}` }
        }

        try {
            const create = {
                hallName,
                price,
                amenties,
                phn,
                seat
            }
            const response = await axios.post(`${BASE_URL}/user/create`, create, headers);
            console.log(response.data);
            if (response.data.message == 'data saved successfully') {
                navigate('/home')
            }

        } catch (error) {
            console.log("error in create room :", error);
            setError(error.response.data.error);

        }
    }

    return (
        <>
            <Navigater />
            <div className="form-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                            <div className="form-container">
                                <div className="form-img"></div>
                                <form className="form-horizontal" onSubmit={handlesubmit}>
                                    <h3 className="title">Registration Info</h3>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            value={hallName} onChange={(e) => setName(e.target.value)}
                                            placeholder="Name of the Hall" />
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control"
                                            value={seat} onChange={(e) => setSeat(e.target.value)}
                                            placeholder="No of seating" />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" value={amenties} onChange={(e) => setAmenties(e.target.value)}>
                                            <option>Select Amenties</option>

                                            <option >full Air conditional</option>
                                            <option >Decoration</option>
                                            <option >Priests</option>
                                            <option >Welcome drink</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control"
                                            value={price} onChange={(e) => setPrice(e.target.value)}
                                            placeholder="Price for one hr" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            value={phn} onChange={(e) => setPhn(e.target.value)}
                                            placeholder="Phone" />
                                    </div>
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;