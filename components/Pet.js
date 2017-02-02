const React = require('react');

// pet prop - id, type, gender, age, weight, name, isAdopted

class Pet extends React.Component {
  constructor() {
    super();
    this.adoptFunction = this.adoptFunction.bind(this)
  }

  adoptFunction(){
      this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="content">
        <a className="header"> {this.props.pet.name} ({this.props.pet.gender==="male" ? "♂" : "♀"})</a>
        <div className="meta">
          <span className="date">{this.props.pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {this.props.pet.age}</p>
          <p>Weight: {this.props.pet.weight}</p>
          {this.props.isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button onClick={this.adoptFunction} className="ui primary button">Adopt pet</button> }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
