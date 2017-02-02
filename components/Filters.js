const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animal: this.props.filters.type
    }
  }

  selectTrigger(event){
    this.setState({
      animal: event.target.value
    })
    this.props.onChangeType(event.target.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>{this.state.animal}</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.animal} onChange={this.selectTrigger.bind(this)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
