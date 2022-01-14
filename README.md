# react-dual-range-slider-lib

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-dual-range-slider-lib.svg)](https://www.npmjs.com/package/react-dual-range-slider-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dual-range-slider-lib
```

## Usage as Class based component

```jsx
import React, { Component } from 'react'

import { DualRangeSlider } from 'react-dual-range-slider-lib'
import 'react-dual-range-slider-lib/dist/index.css'

class Example extends Component {
  const [inRangeStartVal] = useState(100);
  const [inRangeEndVal]  = useState(600);
  const [selectedFromValue, outSelectedFromValue] = useState(0);
  const [selectedToValue, outSelectedToValue] = useState(0);
  
  const [inFilterStartVal] = useState(200);
  const [inFilterRangeEndVal]  = useState(500);

  render() {
    return 
     <DualRangeSlider
              inRangeStartVal={inRangeStartVal}
              inRangeEndVal={inRangeEndVal}
              inFilterRangeStart={inFilterStartVal}
              inFilterRangeEnd={inFilterRangeEndVal}
              outSelectedFromValue={outSelectedFromValue}
              outSelectedToValue={outSelectedToValue}
          />
  }
}
```
## Usage as Functional component

```jsx

import { DualRangeSlider } from 'react-dual-range-slider-lib'
import 'react-dual-range-slider-lib/dist/index.css'

function  Example (){
  const [inRangeStartVal] = useState(100);
  const [inRangeEndVal]  = useState(600);
  const [selectedFromValue, outSelectedFromValue] = useState(0);
  const [selectedToValue, outSelectedToValue] = useState(0);
  
  const [inFilterStartVal] = useState(200);
  const [inFilterRangeEndVal]  = useState(500);

    return (
      <>
      <DualRangeSlider
               inRangeStartVal={inRangeStartVal}
               inRangeEndVal={inRangeEndVal}
               inFilterRangeStart={inFilterStartVal}
               inFilterRangeEnd={inFilterRangeEndVal}
               outSelectedFromValue={outSelectedFromValue}
               outSelectedToValue={outSelectedToValue}
      />
    </>
    );
}
```

## License

MIT © [https://github.com/arnab-datta](https://github.com/https://github.com/arnab-datta)
