import React from 'react'

export const Selector = ({selectorList}:any) => {
  return (
    <select name="price" id="price" className="bg-transparent px-1 md:px-2">
    {
      selectorList.map((option:any) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))
    }
  </select>
  )
}
