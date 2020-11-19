import React from "react";
import ResizeObserver from 'resize-observer-polyfill';
//import dynamic from 'next/dynamic'

//const useState = dynamic(() => import("react"), { ssr: false });

function useResponsiveBreakpoints(elRef, breakpoints) {
  const firstQuery = Object.keys(breakpoints[0])[0];
  const [breakSize, setBreakSize] = React.useState(firstQuery);

 
    const observer = React.useRef(
        new ResizeObserver(entries => {
        // Only care about the first element, we expect one element ot be watched
        const { width } = entries[0].contentRect;
        console.log(width+18)
        setBreakSize(findBreakPoint(breakpoints, width+18));
        })
    );
  

  React.useEffect(() => {
    if (elRef.current) {
      console.log(typeof elRef)
      observer.current.observe(elRef.current);
    }

    return () => {
      observer.current.unobserve(elRef);
    };
  }, [elRef, observer]);

  return breakSize;
}

// Find the largest breakpoint the element is less than
function findBreakPoint(breakpoints, width) {
  const breakpointIndex = breakpoints
    .map(x => Object.values(x)[0])
    .findIndex(x => width < x);

  // element is larger than every breakpoint so it must be the last breakpoint
  if (breakpointIndex === -1) {
    return Object.keys(breakpoints[breakpoints.length - 1])[0];
  }

  return Object.keys(breakpoints[breakpointIndex])[0];
}


export default useResponsiveBreakpoints;