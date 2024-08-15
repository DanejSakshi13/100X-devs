export default function Flex() {
  return (
    //USING TAILWIND CLASS

    <div className="flex justify-center">
      <div className="bg-red-500">Hello1</div>
      <div className="bg-green-500">Hello2</div>
      <div className="bg-yellow-500">Hello3</div>
    </div>

    // NORMAL INLINE CSS USING STYLE OBJECT
    /*
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{backgroundColor:"blue"}}>Hello</div>
            <div style={{backgroundColor:"red"}}>Hello</div>
            <div style={{backgroundColor:"green"}}>Hello</div>
        </div>
        */
  );
}
