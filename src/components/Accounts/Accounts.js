import React from 'react';
import './accounts.scss'

function Accounts({accounts,editHandler,deleteHandler}) {
    return (
        <table className="table accounts-wrapper">
              <thead>
                <tr>
                  <th>Full name</th>
                  <th>Credit card</th>
                  <th>Phone</th>
                  <th>Deposit</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>              
                  {accounts.map((acc, index) => {
                    return  <tr key={index}>
                      <td>{acc.fullName}</td>
                      <td>{acc.creditCard}</td>
                      <td>{acc.phone}</td>
                      <td>{acc.deposit}</td>
                      <td>
                        <button className="btn btn-sm btn-warning me-2" onClick={() => editHandler(index)}>Edit</button>
                        <button className="btn btn-sm btn-danger" onClick={() => deleteHandler(index)}>Delete</button>
                      </td>
                    </tr>
                  })}
              </tbody>
              <tfoot>   
                <tr>
                  <td colSpan='4' className='text-end'>Number accounts</td>
                  <td>{accounts.length}</td>
                </tr>
              </tfoot>
        </table>
    );
}

export default Accounts;