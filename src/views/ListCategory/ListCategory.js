import React, { Component } from "react";
import "./ListCategory.scss";
import Axios from "axios";
import { apiLinks } from "../../services/APILinks";
import Category from "./Category";
import AppContext from "../../services/AppContext";
class ListCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    Axios.get(apiLinks.categories).then(res => {
      this.setState({ categories: res.data });
    });
  }

  render() {
    return (
      <div className="listcategory">
        <div className="row">
          <AppContext.Consumer>
            {this.state.categories.map(category => (
              <Category key={category.id} category={category} />
            ))}
          </AppContext.Consumer>
        </div>
      </div>
    );
  }
}

export default ListCategory;
