import React, { ReactNode, ReactElement } from 'react';


function Headings({title}: {title: string}){
  return <h1>{title}</h1>
}

function HeadingwithContext ({children}: {children: ReactNode}): ReactElement {
    return <h1>{children}</h1>
    }

//Default properties

const defaultContainerProps = {
    heading: <h1> im a headin 1</h1>
};

function Container ({heading, children}: {children: ReactNode } & typeof defaultContainerProps ): ReactElement {
  return <div><h1>{heading}</h1>{children}</div>
  }

  Container.defaultProps = defaultContainerProps

function App() {
  return (
    <div >
    <Headings title="hello world"></Headings>
     <HeadingwithContext><strong>lol</strong></HeadingwithContext> 
     <Container>
      foo
     </Container>
    </div>
  );
}

export default App;
