import PropTypes from 'prop-types'
import Plotly from 'plotly.js'
const React = require('react');
// const Plotly = require('plotly.js');

class Plot extends React.Component {
    static propTypes = {
        handle: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired,
        layout: PropTypes.object
    }

    componentDidMount() {
        this.plot(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.plot(nextProps);
    }

    plot(props) {
        let handle = props.handle,
            data = props.data,
            layout = props.layout;
        Plotly.plot(handle, data, layout);
    }

    render() {
        return (
            <div id={this.props.handle} >Plot</div>
        );
    }
}

export default Plot;