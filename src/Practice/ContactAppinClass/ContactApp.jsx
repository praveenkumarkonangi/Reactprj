import React, { Component } from 'react'
import Axios from 'axios'
import ContactList from './ContactList';
import ContactCard from './ContactCard';
class ContactApp extends Component {
    constructor(props){
        super(props);
        this.state={
            contacts:[],
            errorMessage:null,
            selectedContact:{}
        }
    }
     getData = (contact)=>{
        this.setState({selectedContact:contact})
      }
    componentDidMount(){
        let url="https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
        Axios.get(url).then((response)=>{
            this.setState({contacts:response.data})
        }).catch(()=>{});
    }
  render() {
    return (
      <div>
       
          <h1> hello contact app</h1>
          <pre>{JSON.stringify(this.state.selectedContact)}</pre>
          <div className="continer">
              <div className="row">
                  <div className="col-md-8">
                     
                    <ContactList contacts={this.state.contacts} getData={this.getData}/>
                  </div>
                  <div className="col-md-4">
                    {
                        
                          Object.keys(this.state.selectedContact).length>0?(
                            <> <ContactCard selectedContact={this.state.selectedContact}/></>
                          ):null
                        
                    }
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default ContactApp