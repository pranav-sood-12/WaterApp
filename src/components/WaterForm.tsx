import React, { useEffect, useState } from "react";
import data from "../data.json";
import WaterReport from "./WaterReport";

function WaterForm() {
  const [uniqueDistricts, setUniqueDistricts] = useState<string[]>([]);
  const [locationValues, setLocationValues] = useState<string[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<string>();
  const [selectedLocation, setSelectedLocation] = useState<string>();

  const [isFormVisible, setIsFormVisible] = useState(true);

  function handleDistrictChange(event: React.FormEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement;
    setSelectedDistrict(target.value);
  }

  function handleLocationChange(event: React.FormEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement;
    setSelectedLocation(target.value);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsFormVisible(false)
  }

  useEffect(() => {
    console.log(selectedDistrict);

    if (selectedDistrict) {
      const location = data
        .filter((item) => item.DISTRICT === selectedDistrict)
        .map((item) => item.LOCATION)
        .filter((value, index, self) => self.indexOf(value) === index);

      setLocationValues(location);
    }
  }, [selectedDistrict]);

  useEffect(() => {
    let districtValues: string[] = [];
    districtValues.push("Select your district");
    districtValues = data
      .map((item) => item.DISTRICT)
      .filter((value, index, self) => self.indexOf(value) === index);

    setUniqueDistricts(districtValues);
  }, []);

  return (
    <>
      <div className={`flex justify-center items-center text-gray-300 w-full ${isFormVisible ? 'min-h-screen' : ''}`}>
        {isFormVisible ? <div className="container max-w-[520px] p-5 border border-gray-700 rounded-lg bg-gray-900 shadow-md transition-transform hover:translate-y-[-5px]">
          <h1 className="text-center mb-5 text-2xl">
            Get your water details...
          </h1>
          <form onSubmit={handleSubmit} autoComplete="off">
            <fieldset className="border-none mb-5">
              <label className="block mt-5 text-gray-400">STATE: </label>
              <input
                type="text"
                className="w-full p-3 mt-2 border border-gray-700 rounded bg-gray-900 text-gray-500 focus:border-purple-600 focus:ring-purple-600 transition duration-300"
                value="PUNJAB"
                disabled
                autoComplete="off"
              />
              <label htmlFor="district" className="block mt-5 text-gray-400">
                DISTRICT:
              </label>
              <select
                id="district"
                name="district"
                required
                className="w-full p-3 mt-2 border border-gray-700 rounded bg-gray-900 text-gray-300 focus:border-blue-500 focus:ring-3 transition duration-300 outline-none "
                value={selectedDistrict}
                onChange={handleDistrictChange}
              >
                <option value="">Select District</option>
                {uniqueDistricts.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>

              <label htmlFor="location" className="block mt-5 text-gray-400">
                LOCATION:
              </label>
              <select
                id="location"
                name="location"
                required
                className="w-full p-3 mt-2 border border-gray-700 rounded bg-gray-900 text-gray-300 focus:border-blue-500 focus:ring-3 transition duration-300 outline-none"
                value={selectedLocation}
                onChange={handleLocationChange}
                disabled={!selectedDistrict}
              >
                <option value="">Select Location</option>
                {locationValues.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>

              {/* Other input fields */}
            </fieldset>
            <button type="submit" className="w-full p-3 mt-5 bg-blue-500 text-white border-none rounded cursor-pointer transition duration-300 hover:bg-blue-400 transform hover:-translate-y-1 hover:shadow-md">
              Submit
            </button>
          </form>
        </div> : <WaterReport district={selectedDistrict} location={selectedLocation} />}
      </div>
    </>
  );
}

export default WaterForm;
