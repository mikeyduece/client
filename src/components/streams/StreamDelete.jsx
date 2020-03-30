// Dependencies
import React, { Component }          from 'react'
import { connect }                   from 'react-redux'
import { Link }                      from 'react-router-dom'
import { deleteStream, fetchStream } from '../../actions'
import history                       from '../../history'
// Components
import Modal                         from '../Modal'

class StreamDelete extends Component {
  componentDidMount() {
    // const id = this.props.match.params.id

    this.props.fetchStream(this.props.streamId)
  }

  renderActions() {
    return (
      <>
        <button onClick={() => this.props.deleteStream(this.props.streamId)} className='ui button negative'>Delete</button>
        <Link to='/' className='ui button'>Cancel</Link>
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

  return { stream: state.streams[id], streamId: id }
}

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete)