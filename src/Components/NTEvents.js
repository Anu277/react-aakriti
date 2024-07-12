import React from 'react';
import './NtEvent.css';
import CodePage1 from './CodePage1'; 
import CodePage2 from './CodePage2'; 

class NTEvents extends React.Component {
  state = {
    showCode1: true,
    showCode2: false,
    selectedGradient: 'from-pink-500 to-orange-400'
  };

  handleButtonClick = (gradientClass) => {
    this.setState({ 
      showCode1: gradientClass === 'showCode1',
      showCode2: gradientClass === 'showCode2',
      selectedGradient: gradientClass === 'showCode1' ? 'from-pink-500 to-orange-400' : 'from-green-400 to-blue-600'
    });
  };


  render() {
    return (
      <div className='ml-5 md:ml-0 my-20 text-white'>
        <h1 className='text-3xl font-bold font-[orbitron] tracking-widest leading-8'>Discover a Spectrum of Events </h1>
        <div className='mt-7'>
          <div className='my-10'>
            <h2 className='text-2xl font-semibold'>TECH ART SUMMIT</h2>
          </div>
          {/* Update button onClick to call handleButtonClick with respective gradient class */}
          <button className='relative button1 z-10 sm:mx-2 p-1 sm:p-3 rounded-t-md bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl' onClick={() => this.handleButtonClick('showCode1')}>Project Expo</button>
          <button className=' relative button2 ml-1 sm:mx-2 p-1 sm:p-3 rounded-t-md bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl ' onClick={() => this.handleButtonClick('showCode2')}>Tech Events</button>
        </div>
        {/* Apply selected gradient class to the container div */}
        <div className={`techart-matter w-auto max-w-80 md:max-w-5xl text-white rounded-lg p-1 sm:p-5 mb-10 flex  overflow-auto justify-evenly bg-gradient-to-tr ${this.state.selectedGradient}`}>
          {/* Render the code based on state */}
          {this.state.showCode1 && <CodePage1 />}
          {this.state.showCode2 && <CodePage2 />}
        </div>

      </div>
    );
  }
}

export default NTEvents;
