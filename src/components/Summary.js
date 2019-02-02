
import React, { Component } from 'react';
import SummaryStore from '../stores/SummaryStore';

export default class Summary extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            sum: SummaryStore.getSummary(),
        };
    }

    onChange() {
        const newSum = SummaryStore.getSummary();
        this.setState({ sum: newSum });
    }

    render() {
        return (<div> Summary: {this.state.sum} </div>);
    }

    componentDidMount() {
        SummaryStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        SummaryStore.removeChangeListener(this.onChange);
    }
}
