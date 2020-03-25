// Dependencies
import React       from 'react'
import { connect } from 'react-redux'

const StreamEdit = props => {
  console.log(props)
  return (
    <div>
      StreamEdit
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id

  return { stream: state.streams[id] }
}

export default connect(
  mapStateToProps,
  {}
)(StreamEdit)