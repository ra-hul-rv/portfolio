'use client'
import { links } from '@/lib/data'
import React from 'react'

type SectionName = (typeof links[number]['name']) | "None";
type ActiveSectionProps = {
    children:React.ReactNode
}
type ActiveSectionContextType={
    activeSection:SectionName ,
    setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>;
}
export const ActiveSectionContext =React.createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({children } :ActiveSectionProps) => {
    const [activeSection, setActiveSection] = React.useState<SectionName>('Home')
  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
    }}>{children}</ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider

export const useActiveSectionContext = () => {
    const context = React.useContext(ActiveSectionContext)
    if(context===null) {
        throw new Error('useActiveSectionContext must be used within a ActiveSectionContextProvider')
    }
    return context



}