import React, { Component } from 'react';
import PhotosService from './../services/PhotosService';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { search } from '../actions/photosActions';

export class Search extends Component {

    constructor(props) {
        super(props);
        this.photosService = new PhotosService();
    }

    onSubmit(e) {
        e.preventDefault();
        let request = e.target.elements["search-input"].value; 
        this.props.search(request, 1);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={e=>this.onSubmit(e)}>
                    <div className="row">
                        <div className="col col-md-10 col-lg-10">
                            <input type="text" className="form-control" placeholder="Search" id="search-input" />
                        </div>
                        <div className="col col-md-2 col-lg-2">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Search.propTypes = {
    search: PropTypes.func.isRequired
}

export default connect(null, { search })(Search)
