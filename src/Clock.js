import React, { Component } from 'react';
import './Clock.css';

import * as moment from 'moment';

const HOUR_UNIT = 360 / 12;
const MINUTE_UNIT = 360 / 60;
// const ACC_MINUTE_UNIT = 360 / 60;
const SECOND_UNIT = 360 / 60;

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moment: moment()
        };
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({
                moment: moment()
            })
        }, 1000)
    }

    componentDidUpdate() {
        setTimeout( () => {
            this.setState({
                moment: moment()
            })
        }, 1000)
    }

    render() {
        const now = this.state.moment;
        const hour = (now.hours() + (now.minutes() / 60)) * HOUR_UNIT;
        // const minute = now.minutes() * (360 / 60);
        const minute = (now.minutes() + (now.seconds() / 60)) * MINUTE_UNIT;
        const second = now.seconds() * SECOND_UNIT;

        const hStyle = {
            transform: `rotate(${ hour }deg)`
        };
        const mStyle = {
            transform: `rotate(${ minute }deg)`
        };
        const sStyle = {
            transform: `rotate(${ second }deg)`
        };

        return (
            <div className="AnalogClock">
                <div className="Label12">12</div>
                <div className="Label3">3</div>
                <div className="Label6">6</div>
                <div className="Label9">9</div>
                <div className="Hour" style={ hStyle }/>
                <div className="Minute" style={ mStyle }/>
                <div className="Second" style={ sStyle }/>
                <div className="CenterDot"/>
            </div>
        );
    }
}

export default Clock;
