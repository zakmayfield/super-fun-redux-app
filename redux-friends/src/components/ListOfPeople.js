import React from 'react';
import Person from './Person.js'
import {connect} from 'react-redux'

const ListOfPeople = (props) => {
    return (
        <div>
            <h2>List O' Ppl</h2>
            {props.list.map(person => <Person key={person.id} person={person}/>)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        list: state.people
    }
}

export default connect(mapStateToProps, {})(ListOfPeople);