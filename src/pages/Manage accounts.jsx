import React from 'react'
import Table from '../components/table/table'
import customersList from '../assets/JsonData/customers-list.json'
const customerTableHead = [
  '',
  'name',
  'email',
  'phone',
  'total order',
  'tital spend',
  'location'
]
const renderHead = (item, index) => <th key={index}>{item}</th>
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>  
  </tr>
)
const Manage_accounts = () => {
  return (
    <div>
      <h2>Manage accounts</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card_body">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage_accounts