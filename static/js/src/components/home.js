class Home extends React.Component {
  state = {
    message: this.props.message
  };

  handleClick = () => {
    this.setState({
      message: "Hello, you clicked!"
    });
  };

  render() {
    return (
      <h1 style={{ cursor: "pointer" }} onClick={this.handleClick}>
        {this.state.message}
      </h1>
    );
  }
}

export default Home;
