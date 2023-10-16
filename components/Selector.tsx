import React from 'react'

export const Selector = ({selectorList,defaultValue}:any) => {
  return (
    <select name="price" id="price" className="bg-transparent px-1 md:px-2">
    {defaultValue && <option value="none" selected disabled hidden>{defaultValue}</option> }
    {
      selectorList.map((option:any) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))
    }
  </select>
  )
}
