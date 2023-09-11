import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Details({ BASE_URL }) {
    const [details, setDetails] = useState([]);

    var index = 0;
    useEffect(() => {
        getBookingData()
    }, [])
    const token = localStorage.getItem('token');
    const headers = {
        headers: { "authorization": `${token}` }
    }
    const getBookingData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/user/bookingDetails`, headers)
            console.log(response.data);
            setDetails(response.data);
        } catch (error) {
            console.log("Booking details error :", error)
        }
    }
    return (
        <>
            <Navigater />
            <div className='container'>
                <h>Booked Hall</h>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>Customer name</th>
                            <th>Starting-time</th>
                            <th>Ending time</th>
                            <th>Hall name</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            details.map((data) => (
                                <tr>
                                    <td>{data.length}</td>
                                    <td>{data.customerName}</td>
                                    <td>{data.startDate}</td>
                                    <td>{data.endDate}</td>
                                    <td>{data.room}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Details;