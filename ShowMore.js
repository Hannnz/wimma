import React, { Component } from 'react';
import More from './More';

class ShowMore extends Component {
    constructor() {
        super();
        this.state =  {isHidden: true }
        this.toggleHidden = this.toggleHidden.bind(this);
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden,
            background: '#F8F1E5',
        })
    }
    render() {
        return (
            <div>
                <button className="show-more" onClick={this.toggleHidden}>
                    &darr;
                </button>
                {!this.state.isHidden && <More />}
            </div>  
        );
    }
}
export default ShowMore;