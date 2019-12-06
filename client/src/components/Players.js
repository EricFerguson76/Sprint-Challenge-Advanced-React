import React, { Component } from 'react';
import PlayersCard from './PlayerCard';
import NavBar from './NavBar';
import axios from 'axios';



class Players extends Component {
    state= {
        players: []
    }


    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then((response => {
            this.setState({players: response.data})
        }))
    }


    render() {
        return(
            <div>
                <NavBar />
                <PlayersCard players= {this.state.players} />
            </div>
        )
    };
}

export default Players;