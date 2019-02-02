
import React, { Component } from 'react';
import Counter from './Counter';
import Summary from './Summary';

export default class ControlPanel extends Component {
    render() {
        return (
            <div>
                <Counter caption="First"></Counter>
                <Counter caption="Second"></Counter>
                <Counter caption="Third"></Counter>
                <Summary></Summary>
                <button onClick={ () => this.forceUpdate() }>ForceRepaint</button>
            </div>
        );
    }
};
