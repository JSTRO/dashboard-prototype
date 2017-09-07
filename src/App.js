import React, { Component } from 'react';
import './App.css';
import ProgressBar from 'react-progressbar.js';

const Circle = ProgressBar.Circle;

class App extends Circle {

  render() {

    const options = {
      color: 'black',
      strokeWidth: 3,
      trailWidth: 3,
      from: { color: '#aaa' },
      to: { color: '#333' },
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
      }
    }

    const containerStyle = {
      width: '150px',
      height: '150px'
    }

    return (
      <div>
        <Circle
          progress={.27}
          text={'27%\nProduct'}
          options={{
            ...options,
            from: { color: '#f7750b', width: 4 },
            to: { color: '#f7750b', width: 4 }

          }}
          initialAnimate={true} 
          containerStyle={containerStyle}    
          containerClassName={'progressbar'} />   

        <Circle
          progress={.15}
          text={'3 Months\nRunway'}
          options={{
            ...options,
            from: { color: '#f5260a', width: 4 },
            to: { color: '#f5260a', width: 4 }

          }}              
          initialAnimate={true} 
          containerStyle={containerStyle}    
          containerClassName={'progressbar'} /> 

        <Circle
          progress={.24}
          text={'24%\nConversion'}
          options={{
            ...options,
            from: { color: '#f7750b', width: 4 },
            to: { color: '#f7750b', width: 4 },

          }}
          initialAnimate={true} 
          containerStyle={containerStyle}    
          containerClassName={'progressbar'} /> 

        <Circle
          progress={1}
          text={'100%\nEngagement'}
          options={{
            ...options,
            from: { color: '#3dff05', width: 4 },
            to: { color: '#3dff05', width: 4 },

          }}
          initialAnimate={true} 
          containerStyle={containerStyle}    
          containerClassName={'progressbar'} />  
      </div>                  
    );
  }
}

export default App;