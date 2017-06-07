/**
 * Created by jaeyoung on 2017. 5. 29..
 */
import React from 'react';

// const Inputbar = () => (
const Inputbar = React.createClass({
  propTypes: {
    onSend: React.PropTypes.func.isRequired,
  },

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state.content);
    this.props.onSend(this.state.content);
    this.setState({ content: "" });
  },

  getInitialState() {
    return {
      content: "",
    };
  },

  onContentChange(e) {
    this.setState({ content: e.target.value });
  },

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.content} onChange={this.onContentChange} />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  },
});

export default Inputbar;
