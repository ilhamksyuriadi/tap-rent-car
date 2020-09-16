import React, { Component } from 'react';
import './ViewImage.scss';

export default class ViewImage extends Component {

    componentDidMount() {
        document.body.style.overflowY = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflowY = "scroll";
    }

    render() {
        const img = this.props.img ? <img src={`../assets/${this.props.img}`} alt="" /> : <span></span>
        return (
            <div className="viewimage-layout">     
                { img }
                <p onClick={this.props.closeImage}>&#10006;</p>
            </div>
        )
    }
}
