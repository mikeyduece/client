// Dependencies
import React, { Component }          from 'react'
import { connect }                   from 'react-redux'
import { deleteStream, fetchStream } from '../../actions'
import history                       from '../../history'
// Components
import Modal                         from '../Modal'

class StreamDelete extends Component {
  componentDidMount() {
    const id = this.props.match.params.id

    this.props.fetchStream(id)
  }

  renderActions() {
    return (
      <>
        <button className='ui button negative'>Delete</button>
        <button className='ui button'>Cancel</button>
      </>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }

    const title = this.props.stream.title
    return `Are you sure you want to delete the stream with title:  ${ title }`
  }

  render() {
    return (
      <Modal
        title='Delete Stream'
        content={ this.renderContent() }
        actions={ this.renderActions() }
        onDismiss={ () => history.push('/') }
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id

  return { stream: state.streams[id] }
}

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete)