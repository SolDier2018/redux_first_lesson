import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from "../actions";

class CarsList extends Component {

    showList() {
        return this.props.cars.map((car) => {
            return (
                <li onClick={() => this.props.select(car)} key={car.id}>{car.car}</li>
            )
        })
    }

    render() {
        return(
            <ol>
                {this.showList()}
            </ol>
        )
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(CarsList);