import React, {Component, useState, useEffect } from "react";
import _ from 'lodash';
import axios from'axios';
import letterScanner from "./helper/letterScanner"
import { useSprings, useSpring } from 'react-spring'
import initialAlphabet from "./data/alphabet.json"


const Context = React.createContext();

const ax = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://typescanner.com/' : 'http://192.168.178.20:3000/'
})


// const start = {
// 	gridSetting: {
// 		zoom: 8,
// 	  xPos: 6,
// 	  yPos: -3.8
// 	},
//   fontWeight: 40
// }

// const animation = [
//   { xPos: 2.51 },
//   { yPos: 0 },
//   { zoom: 6 },
//   { xPos: -5 },
//   { zoom: 10 },
//   { xPos: 13 },
//   { zoom: 11 },
//   { yPos: 6 }
// ]

const start = {
	gridSetting: {
		zoom: 5,
	  xPos: 10,
	  yPos: -20
	},
  fontWeight: 40
}

const animation = [
  { yPos: 4 },
  { zoom: 6 },
  { export: 1 },
  { xPos: -13 },
  { zoom: 7 },
  { export: 2 },
  { yPos: 5 },
  { xPos: 8 },
  { yPos: -20 },
  { xPos: 11 },
  { zoom: 9 },
  { openGrid: 1 },
]

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
      this.resetAlphabet();
    }, 3000);
    setTimeout(() => {
      this.renderAlphabet();
    }, 5000);
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

const config = { duration: 1000 }

const ControlledSettings = ({
  resetAlphabet,
  renderAlphabet,
  setFontWeight,
  setGridSetting,
  setCurrentMenu,
  children
}) => {

  let [index, setIndex] = useState(0);

  const onRest = () => {
    setCurrentMenu('')
    setIndex(index => {
      if(index < animation.length-1) {
        return index + 1
      }
      return index
    })
  }

  const [props, set ] = useSpring(() => ({
    zoom: start.gridSetting.zoom,
    xPos: start.gridSetting.xPos,
    yPos: start.gridSetting.yPos,
    fontWeight: start.fontWeight,
    export: 0,
    openGrid: 0,
  }))

  useEffect(() => {
    let delay = index === 0 ? 6000 : 1000;
    let key = Object.keys(animation[index])[0];
    if(key === 'fontWeight'){
      set({
        ...animation[index],
        delay: delay,
        onStart: () => setCurrentMenu(key),
        onFrame: values => setFontWeight(values.fontWeight),
        onRest,
        config
      })
    }
    else if( key === 'export' ){
      set({
        ...animation[index],
        delay: 1250,
        onStart: () => setCurrentMenu(key),
        onRest,
        config
      })
    }
    else if( key === 'openGrid' ){
      set({
        ...animation[index],
        delay: 1250,
        onStart: () => setCurrentMenu(key),
        onRest,
        config
      })
    }
    else {
      set({
        ...animation[index],
        delay: delay,
        onStart: () => {
          resetAlphabet();
          setCurrentMenu(key);
        },
        onFrame: (values) => setGridSetting({...values}),
        onRest: ()=> {
          renderAlphabet();
          onRest();
        },
        config
      })
    }
  }, [index])

  return <>{children}</>
}

export const Consumer = Context.Consumer;
