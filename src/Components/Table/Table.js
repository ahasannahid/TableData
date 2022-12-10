import React, { useEffect, useState } from 'react';
import {AiFillCaretDown } from "react-icons/ai";

const Table = () => {
    const [tableDatas , settableDatas] =  useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => settableDatas(data))
    }, [])

    const handleDropdown = () => {
        <ul>
            <li>Unsort</li>
            <li>Sort By ASC</li>
            <li>Sort By DESC</li>
        </ul>
    }
    
    return (
        <div>
            <h2 className='text-3xl text-center'>All Table Data</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Id <AiFillCaretDown className='text-4xl' onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>last_name <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>Full_name <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>email <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>gender <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>ip_address <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>airport_code <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>time <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>status <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>mobile <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>area <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>show <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
                            <th>edit <AiFillCaretDown onClick={handleDropdown}></AiFillCaretDown></th>
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
                                <td>{tableData?.status}</td>
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