import React, { useState } from 'react'

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  },
]

const useTabs = (initialTab, allTabs) => {
  if(!allTabs || !Array.isArray(allTabs)) return;

  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return { currentItem: allTabs[currentIndex], setCurrentIndex }
}

export const UseTabsApp = () => {

  const { currentItem, setCurrentIndex } = useTabs(0, content);

  return (
    <div>
      <h1>Hello</h1>
      {content.map((section, idx) => <button onClick={() => setCurrentIndex(idx)}>{section.tab}</button>)}
      <p>{currentItem.content}</p>
    </div>
  )
}