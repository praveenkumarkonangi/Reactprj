import React, { Component } from 'react'

class ContactCard extends Component {
 
  render() {
    let {selectedContact}=this.props;
    return (
      <div><h1>hel</h1>
      <pre>{JSON.stringify(this.props)}</pre>
      <div className="continer">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img src={selectedContact.picture.large}alt="/"/>
              </div>
              <div className="card-body">
                <table className='table table-dark'>
                  <thead>
                    <tr>
                      <th>name</th>
                      <th>email</th>
                      <th>city</th>
                      <th>street</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      <tr>

                        <td>{selectedContact.name.first}</td>
                        <td>{selectedContact.email}</td>
                        <td>{selectedContact.location.city}</td>
                        <td>{selectedContact.location.street.name}</td>

                      </tr>
                    
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default ContactCard