import React from 'react';
import {connect} from 'react-redux';
import Person from './Person'

const MyFriendsList = (props) => {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <h2>{props.user.age}</h2>
            {props.user.friends.map(person => <Person key={person.id} person={person}/>)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(MyFriendsList);