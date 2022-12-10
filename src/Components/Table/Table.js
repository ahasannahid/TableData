import React, { useEffect, useState } from 'react';
import {AiFillCaretDown } from "react-icons/ai";
import './Table.css'

const Table = () => {
    const [tableDatas , settableDatas] =  useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => settableDatas(data))
    }, [])

    
    return (
        <div>
            <h2 className='text-3xl text-center'>All Table Data</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>last_name</th>
                            <th>Full_name</th>
                            <th>email</th>
                            <th>gender</th>
                            <th>ip_address</th>
                            <th>airport_code</th>
                            <th>time</th>
                            <th>status</th>
                            <th>mobile</th>
                            <th>area</th>
                            <th>show</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableDatas.map((tableData, i) => <tr className='hover' key={tableData._id}>
                                <th>{i + 1}</th>
                                <td>{tableData?.last_name}</td>
                                <td>{tableData?.first_name} {tableData?.last_name}</td>
                                <td>{tableData?.email}</td>
                                <td>{tableData?.gender}</td>
                                <td>{tableData?.ip_address}</td>
                                <td>{tableData?.airport_code}</td>
                                <td>{tableData?.time}</td>
                                <td className={tableData?.status === 'true'? `green` : `red`}>{tableData?.status}</td>
                                <td>{tableData?.mobile}</td>
                                <td>{tableData?.area}</td>
                                <td>{tableData?.show}</td>
                                <td>{tableData?.edit}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;