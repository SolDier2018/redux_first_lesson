import React, {Component} from 'react';
import {connect} from 'react-redux';

class History extends Component {
    render() {
        return(
            <div>
                <h2>История</h2>
                {
                    JSON.stringify(this.props.cars)

                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cars: state.history
    }
}

export default connect(mapStateToProps)(History);