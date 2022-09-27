import React from 'react';


function Headings({title}: {title: string}){
  return <h1>{title}</h1>
}


function App() {
  return (
    <div className="App">
    <Headings title="hello world"></Headings>
      
    </div>
  );
}

export default App;
