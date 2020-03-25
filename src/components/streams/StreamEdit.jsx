// Dependencies
import _                           from 'lodash'
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
    const id = this.props.match.params.id

    this.props.editStream(id, formValues)
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={ _.pick(this.props.stream, 'title', 'description') }
          onSubmit={ this.onSubmit }
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