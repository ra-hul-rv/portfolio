import React from 'react'
import useIntersectionObserver from './useIntersectionObserver'
import { useActiveSectionContext } from '@/Context/active-section-context'
import type { SectionName } from '@/lib/type'
type useActiveSectionProps={
    sectionName:SectionName,
    threshold:number,
}
const useActiveSection = ({sectionName,threshold=0.5}:useActiveSectionProps) => {
    const {ref,inView} = useIntersectionObserver(threshold)
    const {activeSection,setActiveSection}=useActiveSectionContext()
    if(inView){
      setActiveSection(sectionName)
    }else if(activeSection === sectionName){
      setActiveSection("None")
  
    }
  return {ref}
}

export default useActiveSection