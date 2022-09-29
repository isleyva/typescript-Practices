import React, { ReactNode } from 'react';


function Headings({title}: {title: string}){
  return <h1>{title}</h1>
}

function HeadingwithContext ({children}: {children: ReactNode}){
    return <h1>{children}</h1>
    }



function App() {
  return (
    <div >
    <Headings title="hello world"></Headings>
     <HeadingwithContext><strong>Hi!</strong></HeadingwithContext> 
    </div>
  );
}

export default App;
