import React, { ReactNode, ReactElement } from "react";

// type for a defined prop

function Headings({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

//Type for Childrens

function HeadingwithContext({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h1>{children}</h1>;
}

//Default properties

const defaultContainerProps = {
  heading: <h3> im a headin 1</h3>,
};

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}
// Props fuction
Container.defaultProps = defaultContainerProps;

//Functional props

function TextWithNumber({
  children,
  header,
}: {
  children: (num: number) => ReactNode;
  header: (num: number) => ReactNode;
}) {
  const [state, stateSet] = React.useState<number>(0);
  return (
    <div>
      <h3>{header(state)}</h3>
      <div>{children(state)}</div>
      <div>
        <button onClick={() => stateSet(state + 1)}>add</button>
      </div>
    </div>
  );
}
// List

function List <ListItem>  ({
  items, 
  render
}:{items: ListItem[] 
    render: (item: ListItem) => ReactNode
  }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {render(item)}
          </li>
        ))}
      </ul>
    )
  }

function App() {
  return (
    <div>
      <Headings title="hello world"></Headings>
      <HeadingwithContext>
        <strong>lol</strong>
      </HeadingwithContext>
      <Container>foo</Container>
      <TextWithNumber header={(num: number) => <div>header {num}</div>}>
        {(num: number) => <div> the number is {num}</div>}
      </TextWithNumber>
      <List items={["ivan ","azan","sara"]} render={(item: string) => <div>{item.toLowerCase()}</div>}></List>
    </div>
  );
}

export default App;
