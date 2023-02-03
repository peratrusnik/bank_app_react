import React from 'react';

const styleCSS = {
    backgroundColor: "#f8f8f8",
    padding: "25px",
    borderRadius: "10px",
    border: "1px solid #c0c0c0"
}

function Forms({inputHandler,updateHandler,addHandler,isEdit,inputData}) {
    return (
            <div className='text-center' style={styleCSS}>
                    <input type="text" className='form-control mb-3' placeholder='Full name' name='fullName' onInput={inputHandler} value={inputData.fullName} />
                    <input type="text" className='form-control mb-3' placeholder='Credit card' name='creditCard' onInput={inputHandler} value={inputData.creditCard} />
                    <input type="text" className='form-control mb-3' placeholder='Phone' name='phone' onInput={inputHandler} value={inputData.phone} />
                    <input type="text" className='form-control mb-3' placeholder='Deposit' name='deposit' onInput={inputHandler} value={inputData.deposit} />
                    {isEdit ? 
                        <button className='btn btn-warning w-50' onClick={updateHandler}>Update</button>
                        :
                        <button className='btn btn-primary w-50' onClick={addHandler}>Add</button>
                    }
            </div>
    );
}

export default Forms;