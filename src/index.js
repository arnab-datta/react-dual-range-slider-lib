import React , {useEffect, useState, useRef } from  'react'
import styles from './styles.module.css'

export const DualRangeSlider = ({
  inRangeStartVal,
  inRangeEndVal,
  inFilterRangeStart,
  inFilterRangeEnd,
  outSelectedFromValue,
  outSelectedToValue,
}) => {
  const [sliderOneVal, setSliderOneVal] = useState(inFilterRangeStart);
  const [sliderTwoVal, setSliderTwoVal] = useState(inFilterRangeEnd);

  const [viewValue1, setViewValue1] = useState(inFilterRangeStart);
  const [viewValue2, setViewValue2] = useState(inFilterRangeEnd);

  const [minValue] = useState(inRangeStartVal);
  const [maxValue] = useState(inRangeEndVal);

  const minGap = useState(0);
  const sliderTrack = useRef("");

  useEffect(() => {
    _fnSliderOneInit();
    _fnSliderTwoInit();
  }, []);

  const _fnSliderOneInit = () => {
    if (sliderTwoVal - sliderOneVal <= minGap) {
      const sliderOneVal = sliderTwoVal - minGap;
      setSliderOneVal(sliderOneVal);
    }
    setViewValue1(sliderOneVal);
    _fnSliderColorHandler();
  };
  const _fnSliderTwoInit = () => {
    if (sliderTwoVal - sliderOneVal <= minGap) {
      const sliderTwoVal = sliderOneVal + minGap;
      setSliderTwoVal(sliderTwoVal);
    }
    setViewValue2(sliderTwoVal);
    _fnSliderColorHandler();
  };
  const _fnSliderOneHandler = (e) => {
    const _this = e.target;
    const val1 = _this.value;
    if (sliderTwoVal - val1 <= minGap) {
      const sliderOneVal = sliderTwoVal - minGap;
      setSliderOneVal(sliderOneVal);
    }
    setViewValue1(val1);
    outSelectedFromValue(val1);
    _fnSliderColorHandler();
  };
  const _fnSliderTwoHandler = (e) => {
    const _this = e.target;
    const val2 = _this.value;
    if (val2 - sliderOneVal <= minGap) {
      const sliderTwoVal = sliderOneVal + minGap;
      setSliderTwoVal(sliderTwoVal);
    }
    setViewValue2(val2);
    outSelectedToValue(val2);
    _fnSliderColorHandler();
  };
  const _fnSliderColorHandler = () => {
    const min = minValue;
    const max = maxValue;
    const percent1 = ((viewValue1 - min) / (max - min)) * 100;
    const percent2 = ((viewValue2 - min) / (max - min)) * 100;
    sliderTrack.current.style.backgroundImage = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  };

  return (

      <div className={styles.range__wrapper}>
        <div className={styles.container__cls}>
          <div className={styles.slider__tracker} ref={sliderTrack}></div>
          <input
            type="range"
            id="slider-1"
            min={minValue}
            max={maxValue}
            defaultValue={sliderOneVal}
            onChange={_fnSliderOneHandler}
          />
          <input
            type="range"
            id="slider-2"
            min={minValue}
            max={maxValue}
            defaultValue={sliderTwoVal}
            onChange={_fnSliderTwoHandler}
          />
        </div>
        <div className={styles.values}>
          <span id="viewvalue1">{viewValue1}</span>
          <span id="viewvalue2">{viewValue2}</span>
        </div>
      </div>
    
  );
};

