/* 

METHOD 1 


export default function WrapperComp() {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<TextComponent2 />} />
    </div>
  );
}

function TextComponent() {
  return <div>hi there</div>;
}
function TextComponent2() {
  return <div>Hello World</div>;
}

function CardWrapper({innerComponent}) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      {innerComponent}
    </div>
  );
}
*/
















/*
METHOD 2
 */


export default function WrapperComp() {
  return <div>
    <CardWrapper>
      Hello World from card1
    </CardWrapper>

    <CardWrapper>
      Hello World from card2
    </CardWrapper>
  </div>
}

function CardWrapper({children}){
  return <div style={{border:"2px solid black",padding:"20px"}}>
    {children}
  </div>
}