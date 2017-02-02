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
    this.props.pets.forEach((pet)=>{
          nameslist.push(<div className="ui cards"><code> <Pet pet={pet} onAdoptPet/> </code></div>)
        })
    return <div>{ nameslist }</div>
  }

}

module.exports = PetBrowser;
