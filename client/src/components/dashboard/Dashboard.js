import React, { Component } from "react";
import TicTacToeDialog from "../TicTacToe/TicTacToeDialog";
import LogoSweeperDialog from "../LogoSweeper/LogoSweeperDialog";
import RecursiveSnakeDialog from "../RecursiveSnake/RecursiveSnakeDialog";
import TetrisDialog from "../Tetris/TetrisDialog";
import Container from "@material-ui/core/Container";
import Chat from "../Chat";
import Docs from "../Docs";
import AboutUs from "../AboutUs";
import Scoreboard from "../Scoreboard";
import Grid from '@material-ui/core/Grid';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <div className="container valign-wrapper"
                    style={{
                        position: "absolute",
                        top: "10px",
                        width: "100%"
                    }}
                >
                    <h4>
                        <b style={{ fontFamily: "monospace", color: "maroon" }}>Hey there, {user.name.split(" ")[0]}</b>
                        
                    </h4>
                    <button
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem",
                            position: "absolute",
                            right: "100px"
                        }}
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                        Logout
                            </button>
                </div>
                <br />
                <Container maxWidth="sm">
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <TicTacToeDialog />
                        </Grid>
                        <Grid item xs>
                            <LogoSweeperDialog />
                        </Grid>
                        <Grid item xs>
                            <RecursiveSnakeDialog />
                        </Grid>
                        <Grid item xs>
                            <TetrisDialog />
                        </Grid>
                    </Grid>
                </Container>
                <br></br>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <AboutUs />
                        </Grid>
                        <Grid item lg>
                            <Chat />
                        </Grid>
                        <Grid item lg>
                            <Docs />
                        </Grid>
                        <Grid item lg>
                            <Scoreboard />
                        </Grid>
                    </Grid>
                </Container>
            </div >
        );
    };
};

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
