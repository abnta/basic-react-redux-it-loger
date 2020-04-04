import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { addLog } from './../../actions/logActions';
import { getTechs } from './../../actions/techActions';

const AddLogModal = ({ addLog, techs }) => {

    const[message, setmessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (techs === null) {
            getTechs();
        }
    },[techs])

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' });
        } else {
            console.log(message, tech, attention);
            addLog({ message,tech,attention,date: new Date()})
            M.toast({ html: `log added by ${tech}` });
            setmessage('');
            setTech('');
            setAttention(false);
        }
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setmessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled> Select Technician</option>
                            { techs? techs.map((tech) => (<option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}> { tech.firstName } {' '} {tech.lastName} </option>)): <option disabled> Loading ...</option> }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green blue btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired
}

const mapStateToProp = state => ({
    techs: state.tech.techs
});

export default connect(mapStateToProp,{ addLog, getTechs })(AddLogModal)