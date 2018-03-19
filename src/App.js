import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(){
    super();
    this.state = {
      allowEdit: true,
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
    }
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditedStatus = this.updateEditedStatus.bind(this);
  }
  // updateColor
  updateColor(val){
    this.setState(() => {
      return {
        fontColor: val,
      }
    })
  }
  // updateSize
  updateSize(val){
    this.setState(() => {
      return {
        fontSize: val,
      }
    })
  }
  // updateFamily
  updateFamily(val){
    this.setState(() => {
      return {
        fontFamily: val,
      }
    })
  }
  // updateEditStatus
  updateEditedStatus(val){
    this.setState(() => {
      return {
        allowEdit: val,
      }
    })
  }


  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle allowEdit={this.state.allowEdit} update={this.updateEditedStatus}/>
          <ColorChanger fontColor={this.state.fontColor} updateColor={this.updateColor} allowEdit={this.state.allowEdit}/>
          <SizeChanger fontSize={this.state.fontSize} updateSize={this.updateSize} allowEdit={this.state.allowEdit}/>
          <FamilyChanger fontFamily={this.state.fontFamily} updateFamily={this.updateFamily} allowEdit={this.state.allowEdit}/>
        </div>
        <div className="textArea">
          <TextContainer 
          fontColor={this.state.fontColor}
          fontSize={this.state.fontSize}
          fontFamily={this.state.fontFamily}
          />
        </div>
      </div>
    )
  }
}

export default App;
