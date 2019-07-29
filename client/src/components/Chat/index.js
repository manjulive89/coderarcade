import React from "react";
import io from "socket.io-client";


var HOST = window.location.hostname
var PORT = 3000

// var ws = new WebSocket(HOST);
// var el = document.getElementById('server-time');
// ws.onmessage = function (event) {
//   el.innerHTML = 'Server time: ' + event.data;
// };

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };
        console.log(HOST+':'+PORT);
        
        this.socket = io();

        // this.socket.on('error', function (err) {
        //     console.log('received socket error:')
        //     console.log(err)
        //   })

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        }

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({ message: '' });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                        <div className="card" style={{background: 'linear-gradient(45deg, #C0722C 30%, #F41B25 90%)'}}>
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr />
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="card-footer">
                                <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" />
                                <br />
                                <input type="text" placeholder="Message" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} className="form-control" />
                                <br />
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;