import React, { Component } from 'react';

import './DigitalClock.css';

import * as moment from 'moment';

class DigitalClock extends Component {
    constructor(props: any) {
        super(props);
        
        moment.locale(props.locale ? props.locale : 'en');

        this.state = {
            moment: moment()
        };
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({
                moment: moment()
            });
        }, 1000);
    }

    componentDidUpdate() {
        setTimeout( () => {
            this.setState({
                moment: moment()
            });
        }, 1000);
    }

    render() {
        const format = this.props.format;
        const now = this.state.moment;

        return (
            <div className="DigitalClock">
                <p className="Clock">{ now.format(format) }</p>
            </div>
        );
    }
}

export default DigitalClock;
