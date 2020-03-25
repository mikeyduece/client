// Dependencies
import React, { Component }        from 'react'
import { connect }                 from 'react-redux'
import { editStream, fetchStream } from '../../actions'
// Components
import StreamForm                  from './StreamForm'

class StreamEdit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id

    this.props.fetchStream(id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(formValues)
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          onsSubmit={ this.onSubmit }
          initialValues={ this.props.stream }
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id

  return { stream: state.streams[id] }
}

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit)