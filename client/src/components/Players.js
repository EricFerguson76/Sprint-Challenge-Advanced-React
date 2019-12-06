import React, { Component } from 'react';
import PlayersCard from './PlayerCard'
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
                <h1>Women's World Cup</h1>
                <PlayersCard players= {this.state.players} />

            </div>
        )
    };
}

export default Players;