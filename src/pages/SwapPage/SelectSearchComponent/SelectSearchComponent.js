import React, { useState } from "react";
import "./SelectSearchComponent.css";
import SelectSearch from "react-select-search";

const SelectSearchComponent = ({ focus, blur }) => {
  
  const [value, setValue] = useState("");
  const options = [
    {
      name: "People group 1",
      type: "group",
      items: [
        {
          name: "Annie Cruz",
          value: "annie.cruz",
          photo: "https://randomuser.me/api/portraits/women/60.jpg",
        },
        {
          name: "Eli Shelton",
          disabled: true,
          value: "eli.shelton",
          photo: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        {
          name: "Loretta Rogers",
          value: "loretta.rogers",
          photo: "https://randomuser.me/api/portraits/women/51.jpg",
        },
        {
          name: "Lloyd Fisher",
          value: "lloyd.fisher",
          photo: "https://randomuser.me/api/portraits/men/34.jpg",
        },
        {
          name: "Tiffany Gonzales",
          value: "tiffany.gonzales",
          photo: "https://randomuser.me/api/portraits/women/71.jpg",
        },
        {
          name: "Ansnie Crudz",
          value: "annsie.cruz",
          photo: "https://randomuser.me/api/portraits/women/60.jpg",
        },
        {
          name: "Eli Sheltfon",
          disabled: true,
          value: "elsi.shelton",
          photo: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        {
          name: "Loretta Rogegrs",
          value: "lorestta.rogers",
          photo: "https://randomuser.me/api/portraits/women/51.jpg",
        },
        {
          name: "Lloyd Fishhher",
          value: "lloysd.fisher",
          photo: "https://randomuser.me/api/portraits/men/34.jpg",
        },
        {
          name: "Tiffany Gongzales",
          value: "tiffsny.gonzales",
          photo: "https://randomuser.me/api/portraits/women/71.jpg",
        },
      ],
    },
  ];
  return (
    <div className="select-search-box">
      <div style={{ margin: "0 auto", maxWidth: 200 }}>
        <SelectSearch
          className="select-search"
          options={options}
          value={value}
          onChange={setValue}
          onFocus={focus}
          onBlur={blur}
          search
          placeholder="Сhoose..."
        />
      </div>
    </div>
  );
};
export default SelectSearchComponent;
