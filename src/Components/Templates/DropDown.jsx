import React from "react";
const DropDown = ({ options, func, title }) => {
  return (
    <select style={{ appearance: "none", WebkitAppearance: "none" }} onChange={func} className="appearance-none focus:bg-transparent bg-transparent font-semibold text-zinc-300 px-7 flex items-center justify-center  text-center py-2 rounded-md border-[0.5px] border-zinc-500">
      <option value="0" disabled defaultValue>{title}</option>
      {options.map((item, index) => (
      <option value={item}>{item.toUpperCase()}</option>
      ))}
    </select>
  );
};

export default DropDown;
