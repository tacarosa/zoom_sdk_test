import React, { Component } from 'react';

class main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            response : 'Ini Response'
        }
    }
    

    componentDidMount(){
        this.loadDataAPI()
    }

    loadDataAPI = () => {
        let token = process.env.REACT_APP_TOKEN_API;

        fetch('https://api.zoom.us/v2/users/', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`,
                // 'Accept': 'application/json', 
                // 'Content-Type': 'application/json',
            },
            credentials : 'include',
        })
        .then(response => {
            return response.json();
        })
        .then(result =>{
            console.log(result);
            
            this.setState({
                response : result
            });
        })
        .catch(err=>{
            this.setState({
                response : err.toString()
            });
        })
    }

    render() {
        return (
            <div>
                <h1>Test Connect to API</h1>
                <p>
                    {this.state.response}
                </p>
            </div>
        )
    }
}

export default main
