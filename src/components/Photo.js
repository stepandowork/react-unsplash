import React, { Component } from 'react'

export class Photo extends Component {
    render() {
        return (
            <div className="image-container">
                <img src={this.props.photo.urls.small} alt=""/>
                <div className="user-name" id={this.props.photo.id}>
                    <img src ={this.props.photo.user.profile_image.small} alt="" className="img-thumb"/>
                    <span>{this.props.photo.user.name}</span>
                </div>
                <div className="likes">{this.props.photo.likes}</div>
            </div>
        )
    }

    componentDidMount() {
        let userLInk = document.getElementById(this.props.photo.id);
        userLInk.addEventListener("click", e => {
            window.open(this.props.photo.user.links.html, "_blank");
        })

    }
}

export default Photo
