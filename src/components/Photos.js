import React, { Component } from 'react';
import Photo from './Photo';
import { connect } from 'react-redux';
import { fetchPhotos, scroll } from '../actions/photosActions';
import PropTypes from 'prop-types';

export class Photos extends Component {

    constructor(props) {
        super(props);
        this.page = 1;
    }

    componentWillMount() {
        this.props.fetchPhotos(this.page);
    }

    render() {        
        return this.props.photos.map(photo=>{
            return (
                <Photo key = {photo.id} photo = {photo}/>                    
            )
        })     
    }

    componentDidMount() {
        window.addEventListener("scroll", e => {
            let scrollable = document.documentElement.scrollHeight - window.innerHeight;
            let scrolled = window.scrollY;
            if(Math.ceil(scrolled) === scrollable || Math.floor(scrolled) === scrollable) {
                this.page++;              
                this.props.scroll(this.props.request, this.page);
            }
        })
    }

    
}

Photos.propTypes = {
    fetchPhotos: PropTypes.func.isRequired,
    scroll: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    request: state.photos.request,
    photos: state.photos.items
})

export default connect(mapStateToProps, { fetchPhotos, scroll })(Photos);
