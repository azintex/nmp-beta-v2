import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSubscribers, newSubscriber} from '../../_actions/subscriber';

function Content(props) {

    //const [subscribers, setSubscribers] = useState([]);
    console.log(props);

    useEffect(() => {
        props.fetchSubscribers();
    },[]);


    return(
        <div className='col-9'>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        subscribers: state.subscribers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSubscribers: () => dispatch(fetchSubscribers()),
        newSubscriber: subscriberData => dispatch(newSubscriber(subscriberData))
    }
}

const Susbcribers = connect(mapStateToProps, mapDispatchToProps)(Content);
export default Susbcribers;
