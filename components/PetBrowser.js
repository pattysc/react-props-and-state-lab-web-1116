const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {

  // displayPets(array){
  //   array.forEach((pet)=>{
  //     return <Pet pet={pet} />
  //   })
  // }
  //
  // render() {
  //   return (
  //     <div className="ui cards">
  //       console.log();
  //       <code>&lt;Pet /&gt;</code> &nbsp;
  //       {this.displayPets(this.props.pets)}
  //     </div>
  //   );
  // }


  render() {
    var nameslist = []
    let self = this
    self.props.pets.forEach((pet)=>{
      if(self.props.adoptedPets.includes(pet.id)){
        nameslist.push(<div className="ui cards"><code> <Pet pet={pet} isAdopted={true} onAdoptPet={this.props.onAdoptPet}/> </code></div>)
      }else{
        nameslist.push(<div className="ui cards"><code> <Pet pet={pet} isAdopted={false} onAdoptPet={this.props.onAdoptPet}/> </code></div>)
      }

    })
    return <div>{ nameslist }</div>
  }

}

module.exports = PetBrowser;
