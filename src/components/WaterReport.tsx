import React, { useEffect, useState } from 'react'
import data from '../data.json'
import {WaterDataTypeOrNull} from '../types'
import MapComponent from './waterDetails/MapComponent';
import WaterChart from './waterDetails/WaterChart';

interface WaterReportProps {
  district: string | undefined;
  location: string | undefined;
}

const WaterReport : React.FC<WaterReportProps>  = ({district,location}) => {

  const [waterDetails,setWaterDetails] = useState<WaterDataTypeOrNull>(null);

  useEffect(() => {
    const value = data.filter((val) => val.DISTRICT === district && val.LOCATION === location);
    console.log(value);
    if(value){
      setWaterDetails(value[0]);
    }
  }, [district, location]);
  
  console.log(waterDetails);
  
  
  return (
    <div className='w-full'>
      {waterDetails != null  ? (
        <div className='flex flex-row justify-between'>
          <div className='w-[60%]'>
          <MapComponent latitude={waterDetails.LATITUDE} longitude={waterDetails.LONGITUDE} district={waterDetails.DISTRICT.toString()} location={waterDetails.LOCATION}/>
          </div>
          {/* Render water details */}
          {/* <div>District: {waterDetails[0].DISTRICT.toString()}</div>
          <div>Location: {waterDetails[0].LOCATION}</div>
          <div>Location: {waterDetails[0].CO3.toString()}</div>
          <div>Location: {waterDetails[0].Ca}</div>
          <div>Location: {waterDetails[0].Cl}</div>
          <div>Location: {waterDetails[0].EC}</div>
          <div>Location: {waterDetails[0].F}</div>
          <div>Location: {waterDetails[0].HCO3}</div>
          <div>Location: {waterDetails[0].K}</div>
          <div>Location: {waterDetails[0].LATITUDE}</div>
          <div>Location: {waterDetails[0].LONGITUDE}</div>
          <div>Location: {waterDetails[0].Mg}</div>
          <div>Location: {waterDetails[0].PO4}</div> */}
          {/* <div>{waterDetails[0]}</div> */}
          <div className='w-[25%] h-[80vh] overflow-y-auto mx-16'>
            
            <WaterChart pH={waterDetails.pH} backgroundColors={['rgba(255,99,132,0.5)', 'rgba(255, 255, 255, 0.5)']}/>
            <WaterChart pH={waterDetails.Ca} backgroundColors={['rgba(255,99,132,0.5)', 'rgba(255, 255, 255, 0.5)']}/>
            <WaterChart pH={waterDetails.Cl} backgroundColors={['rgba(255,99,132,0.5)', 'rgba(255, 255, 255, 0.5)']}/>
            <WaterChart pH={waterDetails.F} backgroundColors={['rgba(255,99,132,0.5)', 'rgba(255, 255, 255, 0.5)']}/>

          {/* {Object.entries(waterDetails).map(([key, data]) => (
            <div key={key}>
              <strong>{key}:</strong> {data.toString()}
            </div>
          ))} */}
          </div>
          

          {/* Add more details here as needed */}
        </div>
      ) : (
        <div>No water details available</div>
      )}
    </div>
  )
}

export default WaterReport