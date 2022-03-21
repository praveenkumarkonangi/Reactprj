import React, { Component } from 'react'

export class ContactList extends Component {
  slectedContact=(contact)=>{
    console.log(contact.email);
    this.props.getData(contact)
  };
  render() {
    let {contacts}=this.props;
   
    return (
      <div>
          <div className="continer">
              <div className="row">
                  <div className="col">
                      <table className='table tbale-hover  table-dark'>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>email</th>
                              <th>city</th>
                              <th>street</th>
                      

                            </tr>

                          </thead>
                          <tbody>
                              {contacts.length>0?(<React.Fragment>
                                {contacts.map((contact,index)=>{
                                  return (
                                    <tr  onClick={this.slectedContact.bind(this,contact)} kry={index}>
                                      <td>{contact.name.first}</td>
                                      <td>{contact.email}</td>
                                      <td>{contact.location.city}</td>
                                      <td>{contact.location.street.name}</td>
                                    </tr>
                                  );
                                })}
                              </React.Fragment>):null}
                          </tbody>
                      </table>
                  </div>
    
              </div>
          </div>
      </div>
    )
  }
}

export default ContactList