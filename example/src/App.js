import React , {useState} from  'react'

import { DualRangeSlider } from 'react-dual-range-slider-lib'
import 'react-dual-range-slider-lib/dist/index.css'

const App = () => {
  const [inRangeStartVal] = useState(100);
  const [inRangeEndVal]  = useState(600);
  const [selectedFromValue, outSelectedFromValue] = useState(0);
  const [selectedToValue, outSelectedToValue] = useState(0);
  
  const [inFilterStartVal] = useState(200);
  const [inFilterRangeEndVal]  = useState(500);
    
    return (
      <div className='example__app__wrappper'>
        <h1>Example:- How to use <code>react-dual-range-slider-lib</code></h1>
        <div className='viewBox'>
          <label>Range Start : </label>
          <input className="inputBox" type="text" readOnly  value={inRangeStartVal}/>
          <label>Range End : </label>
          <input className="inputBox" type="text" readOnly  value={inRangeEndVal}/>
        </div>
        <div  className='viewBox'>
          <label>Selected Value From : </label>
          <input className="inputBox" type="text" readOnly  value={selectedFromValue}/>
          <label>Selected Value To: </label>
          <input className="inputBox" type="text" readOnly  value={selectedToValue}/>
        </div>
        <div className='example__app__innner'>
          <DualRangeSlider
              inRangeStartVal={inRangeStartVal}
              inRangeEndVal={inRangeEndVal}
              inFilterRangeStart={inFilterStartVal}
              inFilterRangeEnd={inFilterRangeEndVal}
              outSelectedFromValue={outSelectedFromValue}
              outSelectedToValue={outSelectedToValue}
          />
        </div> 
        <h2>Author:- Arnab Datta</h2>
        <h3><a href='https://github.com/arnab-datta/react-dual-range-slider-lib'>https://github.com/arnab-datta/react-dual-range-slider-lib</a></h3>
      </div> 
      )
}

export default App
