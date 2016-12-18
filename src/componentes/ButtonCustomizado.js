import React, { Component } from 'react';

export default class ButtonCustomizado extends Component{

    render() {
        return (
            <div className="pure-control-group">
            	<input type={this.props.type} className={this.props.className} value={this.props.value}/>                                    
            </div>          
        );
    }
}