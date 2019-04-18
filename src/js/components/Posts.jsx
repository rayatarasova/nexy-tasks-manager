import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/usersActions";

export class Post extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.users.remoteArticles.slice(0, 10)
    };
}

export default connect(
    mapStateToProps,
    { fetchUsers }
)(Post);
