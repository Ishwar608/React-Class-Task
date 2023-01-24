import React from 'react'
import './Disdataintable.css'

export const Disdataintable = ({ data }) => {
    let newData = [{...data}]
    return (
        <div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                </tr>

                {
                    newData.map((value) => {

                        return (
                            <tr>
                                <td>{value.firstName}</td>
                                <td>{value.lastName}</td>
                                <td>{value.mobileNo}</td>
                                <td>{value.Address}</td>
                            </tr>
                        );

                    })
                }
            </table>


        </div>
    )
}
