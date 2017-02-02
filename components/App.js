const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
    this.thing = this.thing.bind(this)
  }

  thing(event) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: event
      })
    })
  }

  adoption(id){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  fetching(){
    let URL = `/api/pets`
    if(this.state.filters.type === 'all'){
      URL = `/api/pets`
    }else{
      URL = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(URL)

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.thing} onFindPetsClick={this.fetching.bind(this)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoption.bind(this)} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
