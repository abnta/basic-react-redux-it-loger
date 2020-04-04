import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'

import { connect } from 'react-redux';
import { getTechs } from './../../actions/techActions'

const TechListModal = ({tech: { techs, loading }, getTechs }) => {

    useEffect(() => {
        if (techs === null){
            getTechs();
        }
    }, [techs])

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProp = state => ({
    tech: state.tech
});

export default  connect(mapStateToProp, { getTechs })(TechListModal)