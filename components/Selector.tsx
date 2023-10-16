import React from 'react'

export const Selector = ({selectorList,name}:any) => {
  return (
    <select name={name} id={name} className="bg-transparent px-1 md:px-2">
    {
      selectorList.map((option:any) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))
    }
  </select>
  )
}
