import React, { useState } from "react";
import {
  SketchPicker,
  SwatchesPicker,
  PhotoshopPicker,
  SliderPicker,
  MaterialPicker,
  CirclePicker,
  ChromePicker,
  BlockPicker,
  CompactPicker,
  HuePicker,
  TwitterPicker,
  AlphaPicker,
  GithubPicker,
} from "react-color";
import "./colorPcks.css";

const ColorPick = () => {

  const [color, setColor]= useState("#fff")
  
const handler=(color)=>{
  setColor(color.hex)
}

  return (
    
    <div className="outer-box">
      <div className="grid-container">
        <div className="grid-item-1">
          <SketchPicker color={color} onChangeComplete={handler} />
        </div>
        <div className="grid-item-2">
          <SwatchesPicker  color={color} onChangeComplete={handler}/>
        </div>
        <div className="grid-item-3">
          <PhotoshopPicker color={color} onChangeComplete={handler} />
        </div>
        <div className="grid-item-4">
          <SliderPicker color={color} onChangeComplete={handler} />
        </div>
        <div className="grid-item-5">
          <MaterialPicker color={color} onChangeComplete={handler} />
        </div>
        <div className="grid-item-6">
          <CirclePicker  color={color} onChangeComplete={handler}/>
        </div>
        <div className="grid-item-8">
          <BlockPicker color={color}  onChangeComplete={handler}/>
        </div>
        <div className="grid-item-9">
          <CompactPicker color={color}  onChangeComplete={handler}/>
        </div>
        <div className="grid-item-10">
          <HuePicker className="maarginB" onChangeComplete={handler} color={color} />
          <AlphaPicker  color={color} onChangeComplete={handler}/>
        </div>
        <div className="grid-item-11">
          <TwitterPicker color={color} onChangeComplete={handler}/>
        </div>
        
        <div className="grid-item-13">
        <GithubPicker color={color} onChangeComplete={handler}/>
        </div>
      </div>
    </div>
  );
};

export default ColorPick;
