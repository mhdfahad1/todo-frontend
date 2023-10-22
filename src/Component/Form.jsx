import React, { useEffect, useState } from 'react'
import './Form.css'
import { addAData, deleteAdata, editData } from '../Api/allApi';
import { getData } from '../Api/allApi'
import { Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField } from '@mui/material';


function Form() {
    const [input, setInput] = useState("")
    const [store, setStore] = useState({
        id: "", dataStore: ""
    })
    const [allVideo, setallVideo] = useState([])

    const storeData = async (f) => {
        f.preventDefault()
        if (input) {
            const data = await addAData(store)
            if (data.status > 500 && data.status < 599) {
                toast.error('Server Error')
            }
            console.log(data);
            setInput("")
        }
        else {
            toast.warning("Please Type the Task")
        }
    }

    const handleChange = (e) => {
        if (store) {
            setStore({ ...store, dataStore: e.target.value })
            setInput(e.target.value)
            console.log(e.target.value);
            console.log(store);
        }
    }

    const getText = async () => {
        const { data } = await getData()
        if (data.status > 500 && data.store < 599) {
            toast.error('server error')
        }
        setallVideo(data)
    }

    const removeItem = async (id) => {
        const { data } = await deleteAdata(id)
    }

    const editItem = async (id) => {
        const response = await deleteAdata(id)
        allVideo?.map(item => {
            if (item.id === id) {
                setStore(item)
                setInput(item.dataStore)
            }
        })

    }
    useEffect(() => {
        getText()
    })
    return (
        <>
            <div className='page'>
                <h1 className='text-dark text-center mt-5'>TO DO List</h1>
                <div className='form shadow rounded'>
                    <form className='d-flex' action="">
                        <input onChange={(e) => handleChange(e)} value={input} placeholder='What is the task today?' id='inputbox' type="text" />
                        <button onClick={(f) => storeData(f)} id='buttonadd'>ADD</button>

                    </form>
                    <Row id='row1' className='p-4'>
                        {
                            allVideo.length > 0 ? allVideo.map((item, index) => (
                                <div key={index} className='listDiv listbar'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <div class="input-group-text bg-dark">
                                                <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                                            </div>
                                            <p className='ms-2 mt-2'>{item.dataStore}</p>
                                        </div>
                                        <div>
                                            <button onClick={(id) => removeItem(item.id)} className='btn '><i className="fa-solid fa-trash" style={{ color: '#f43a0b' }}></i>
                                            </button>
                                            <button onClick={(id) => editItem(item.id)} className='btn'><i className="fa-regular fa-pen-to-square" style={{ color: '#328208' }}></i></button>
                                        </div>
                                    </div>
                                </div >
                            )) : <p className=' fs-4 text-danger  d-flex justify-content-center align-items-center'>Please Add Value!!</p>


                        }        </Row>
                </div>

            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>

    )
}

export default Form