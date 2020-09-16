import React from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions'
import Friend from './Friend'

class Friends extends React.Component {
    
  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return(
      <div>
        {this.props.friends.map(friend => 
        <Friend friend={friend} 
        key={friend.id} 
        id={friend.id}  />
        )}
      </div>
        )      
    }
}

function mstp(state) {
  return{
    fetchingFriends: state.fetchingFriends,
    friends: state.friends,
    error: state.error
  }
}

export default connect(mstp, { getFriends })(Friends)