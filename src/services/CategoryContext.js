import React, { Component } from "react";
import Axios from "axios";
import { apiLinks } from "./APILinks";
const CategoryContext = React.createContext();
class CategoryProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryUrl: apiLinks.categories
    };
  }
  componentDidMount() {
    Axios.get(apiLinks.categories).then(res => {
      console.log(res);
      this.setState({ categories: res.data });
    });
  }
  getCategory = id => {
    const category = this.state.categories.find(
      category => category._id === id
    );
    return category;
  };

  render() {
    return (
      // <CategoryContext.Provider value={{ categories: { loadCategory: function(categories) state: ...this.state } }}>
      <CategoryContext.Provider value={{ categories: this.state.categories }}>
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}
const CategoryConsumer = CategoryContext.Consumer;
export { CategoryProvider, CategoryConsumer };
