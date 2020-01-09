import React from "react";
import { connect } from "react-redux";

class PageLogin extends React.Component {
    render() {
        return (
            <div align="center">
                <h2>Login</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Login"
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state /* , ownProps */) => {
    return {};
  };

  const mapDispatchToProps = dispatch => ({});

  export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);