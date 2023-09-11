import axios from 'axios';
import React, { useEffect, useState } from 'react';


function BookingHall({ BASE_URL }) {
    const [customerName, setCustomerName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [room, setRoom] = useState('');
    const [hallData, setHalldata] = useState([]);

    const [hallId, setHallId] = useState('')


    const token = localStorage.getItem('token');
    const headers = {
        headers: { "authorization": `${token}` }
    }
    useEffect(() => {
        getdata();
    }, []);
    const getdata = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/user/list`, headers)
            console.log(response.data);
            setHalldata(response.data)

        } catch (error) {
            console.log("Error in getting data :", error)
        }
    }

    console.log(hallId);
    console.log("hloo");
    function handlevalue(e) {

        const value = e.target.value
        const splitval = value.split(',')

        setHallId(splitval[0]);
        setRoom(splitval[1]);
        console.log(e.target.value);

    }
    const handlebook = async (event) => {
        event.preventDefault();
        const bookdata = {
            customerName,
            startDate,
            endDate,
            room,
            hallId
        }
        try {
            const response = await axios.post(`${BASE_URL}/user/booking`, bookdata, headers);
            console.log(response.data);
        } catch (error) {
            console.log("Error in booking data :", error)
        }
    }

    return (
        <div className="form-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                        <div className="form-container">
                            <div className="form-img"></div>
                            <form className="form-horizontal" onSubmit={handlebook}>
                                <h3 className="title">Booking Info</h3>
                                <br /><br /><br />
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                        value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                                        placeholder="Name of the customer" />
                                </div>
                                <div className="form-group">
                                    <input type="date" className="form-control"
                                        value={startDate} onChange={(e) => setStartDate(e.target.value)}
                                        placeholder="select start date" />
                                </div>
                                <div className="form-group">
                                    <input type="date" className="form-control"
                                        value={endDate} onChange={(e) => setEndDate(e.target.value)}
                                        placeholder="select end date" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" value={room} onChange={handlevalue}>
                                        <option>Select Hall</option>
                                        {
                                            hallData.map((data) => (
                                                (data.status === "none") ? (

                                                    <option key={data._id} value={[data._id, data.hallName]}>
                                                        {data.hallName}</option>

                                                ) : (
                                                    <option key={data._id} >No room are available</option>
                                                )

                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="space m-4 p-4">
                                </div>

                                <button type="submit" className="btn btn-default mb-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingHall;