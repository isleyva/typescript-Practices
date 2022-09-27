import React from 'react';


function Headings({title}: {title: string}){
  return <h1>{title}</h1>
}

function HeadingwithContext ({children}: {children: string}){
    return <h1>{children}</h1>
    }



function App() {
  return (
    <div >
    <Headings title="hello world"></Headings>
     <HeadingwithContext>hi!</HeadingwithContext> 
    </div>
  );
}

export default App;
