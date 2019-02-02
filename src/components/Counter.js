
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Actions from '../Actions';
import CounterStore from '../stores/CounterStore';

export default class Counter extends Component {
    static propTypes = {
        caption: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);

        this.state = {
            count: CounterStore.getCounterValues()[this.props.caption],
        };
        console.log(`Counter ${this.props.caption} constructor`);
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({ count: newCount });
    }

    onClickIncrementButton() {
        Actions.increment(this.props.caption);
    }

    onClickDecrementButton() {
        Actions.decrement(this.props.caption);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || nextState.count !== this.state.count;
    }

    componentWillUpdate() {
        console.log(`Counter ${this.props.caption} will update`);
    }

    componentDidUpdate() {
        console.log(`Counter ${this.props.caption} did update`);
    }

    componentWillReceiveProps(nextProps) {
        console.log(`Counter ${this.props.caption} is receiving the props`);
    }

    componentWillMount() {
        console.log(`Counter ${this.props.caption} will mount`);
    }

    render() {
        console.log(`Counter ${this.props.caption} is rendering`);
        const { caption } = this.props
        return (
            <div>
                <span onClick={this.onClickDecrementButton}>-</span>
                <span onClick={this.onClickIncrementButton}>+</span>
                <span>{ caption } count: { this.state.count }</span>
            </div>
        );
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
        console.log(`Counter ${this.props.caption} did mount already`);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }
}
