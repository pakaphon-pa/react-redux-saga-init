import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { createAction } from "redux-actions";
import { PRE_LOAD_DATA } from "./redux/actions/type";

function App(props) {
  useEffect(() => {
    props.preload();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const load = createAction("PRE_LOAD_DATA");

App.prototype = {
  starter: PropTypes.object,
  getStarter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  starter: get(state, "", {}),
});

const mapStateToDispatch = (dispatch) => ({
  preload: bindActionCreators(load, dispatch),
});

export default connect(mapStateToProps, mapStateToDispatch)(App);
