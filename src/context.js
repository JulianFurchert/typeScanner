import React, {Component } from "react";
import _ from 'lodash';
import axios from'axios';
import letterScanner from "./helper/letterScanner"
// import { useSprings } from 'react-spring'
import initialAlphabet from "./data/alphabet.json"


const Context = React.createContext();

const ax = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://typescanner.com/' : 'http://192.168.178.20:3000/'
})

const start = {
	gridSetting: {
		zoom: 5,
	  xPos: 6,
	  yPos: 0,
	},
  fontWeight: 40
}


// const start = {
// 	gridSetting: {
// 		zoom: 8,
// 	  xPos: 2.51,
// 	  yPos: -3.8,
// 	},
//   fontWeight: 40
// }

// const animation = [
//   {
//     from: { zoom: start.gridSetting.zoom },
//     zoom: 6,
//   },
//   {
//     from: { xPos: start.gridSetting.xPos },
//     xPos: 0,
//   },
// 	// NEXT
// 	{
//     from: { zoom: 6 },
//     zoom: 8,
//   },
//   {
//     from: { xPos: 0 },
//     xPos: 9,
//   },
//   {
//     from: { fontWeight: 40 },
//     fontWeight: 80,
//   },
// 	// NEXT
// 	{
//     from: { zoom: 8 },
//     zoom: 15,
//   },
//   {
//     from: { xPos: 9 },
//     xPos: 17,
//   },
// 	{
//     from: { fontWeight: 80 },
//     fontWeight: 40,
//   }
// ]

// const start = {
// 	gridSetting: {
// 		zoom: 5,
// 	  xPos: 10,
// 	  yPos: -20,
// 	},
//   fontWeight: 40
// }

// const animation = [
//   {
//     from: { zoom: start.gridSetting.zoom },
//     zoom: 6,
//   },
//   {
//     from: { xPos: start.gridSetting.xPos },
//     xPos: -13,
//   },
//   {
//     from: { yPos: start.gridSetting.yPos },
//     yPos: 5,
//   },
// 	// Next
// 	{
//     from: { zoom: 6 },
//     zoom: 7,
//   },
//   {
//     from: { xPos: -13 },
//     xPos: 8,
//   },
//   {
//     from: { yPos: 5 },
//     yPos: -20,
//   },
// 	// Next
//   {
//     from: { xPos: 8 },
//     xPos: 15,
//   },
// 	// Next
// 	{
//     from: { zoom: 7 },
//     zoom: 9,
//   },
//   {
//     from: { xPos: 15 },
//     xPos: 11,
//   },
// ]

export class Provider extends Component {
  state = {
    loading: true,
    alphabet: initialAlphabet,
    previewLetter: "A",
    fontWeight: start.fontWeight,
    grid: null,
    gridJson: [],
    currentMenu: '',
    gridSetting: {...start.gridSetting}
  };

  resetAlphabet = () => {
    this.setState({ alphabet: initialAlphabet})
  }

  renderAlphabet = () => {
    let alphabet = _.mapValues( initialAlphabet, letter => {
      return letterScanner(
        letter,
        this.state.gridJson,
        this.state.gridSetting
      );
    });
    this.setState({ alphabet })
    this.setState({ loading: false });
  }

  setPreviewLetter = previewLetter => {
    this.setState({ previewLetter })
  }

  setGrid = grid => {
    this.setState({ grid });
    this.setState({ loading: true });
    ax.get(`grids-json/${grid}.json`)
      .then(function (response) {
        let gridJson = response.data;
        this.setState({ gridJson }, () => {
          this.renderAlphabet();
        });
      }.bind(this))
      .catch(function (error) {});
  }

  setGridSetting = setting => {
    this.setState({
      gridSetting: Object.assign(this.state.gridSetting, setting)
    })
  }

  setFontWeight = fontWeight => {
    this.setState({ fontWeight})
  }

  setCurrentMenu = currentMenu => {
    this.setState({ currentMenu })
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        currentMenu: '',
        gridSetting: {...start.gridSetting},
        fontWeight: start.fontWeight
      },()=>{
        this.resetAlphabet();
      })
    }, 4000);
    setTimeout(() => {
        this.renderAlphabet();
    }, 6000);
  }

  render(){
    return(
      <ControlledSettings
        resetAlphabet={this.resetAlphabet}
        renderAlphabet={this.renderAlphabet}
        setFontWeight={this.setFontWeight}
        setGridSetting={this.setGridSetting}
        setCurrentMenu={this.setCurrentMenu}
      >
        <Context.Provider
          value={{
            ...this.state,
            resetAlphabet: this.resetAlphabet,
            renderAlphabet: this.renderAlphabet,
            setPreviewLetter: this.setPreviewLetter,
            setFontWeight: this.setFontWeight,
            setGrid: this.setGrid,
            setGridSetting: this.setGridSetting,
          }}
        >
          {this.props.children}
        </Context.Provider>
      </ControlledSettings>
    )
  }
}

const config = { duration: 800 }

const ControlledSettings = ({
  resetAlphabet,
  renderAlphabet,
  setFontWeight,
  setGridSetting,
  setCurrentMenu,
  children
}) => {

  // useSprings(animation.length, index => {
  //   let key = Object.keys(animation[index])[1];

  //   if(key === 'fontWeight'){
  //     return {
  //       ...animation[index],
  //       delay: 8000 + (1600 * index),
  //       onStart: () => setCurrentMenu(key),
  //       onFrame: values => setFontWeight(values.fontWeight),
  //       onRest: () => setCurrentMenu(''),
  //       config
  //     }
  //   }

  //   return {
  //     ...animation[index],
  //     delay: 8000 + (1600 * index),
  //     onStart: (prop)=> {
  //       resetAlphabet();
  //       setCurrentMenu(key);
  //     },
  //     onFrame: (values) => {
  //       setGridSetting({...values})
  //     },
  //     onRest: ()=> {
  //       renderAlphabet();
  //       setCurrentMenu('');
  //     },
  //     config
  //   }
  // })

  return <>{children}</>
}

export const Consumer = Context.Consumer;
