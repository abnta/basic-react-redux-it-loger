import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { addLog } from './../../actions/logActions'

const AddLogModal = ({ addLog }) => {

    const[message, setmessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

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
                            <option value="John Doe" > John Doe</option>
                            <option value="Sara Smith" > Sara Smith</option>
                            <option value="Sara Wilson" > Sara Wilson</option>
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

export default connect(null,{ addLog })(AddLogModal)