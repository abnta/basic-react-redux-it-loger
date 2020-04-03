import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

import { connect } from "react-redux";

import { deleteLog } from "./../../actions/logActions";
import { setCurrent } from "./../../actions/logActions";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by:{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment
            parse="YYYY-MM-DDThh:mm:ss.SSSZ"
            format="MMMM Do YYYY, h:mm:ss a"
          >
            {" "}
            {log.date}
          </Moment>
        </span>
        <a className="secondary-content" onClick={() => deleteLog(log.id)}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
