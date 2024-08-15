export default function Responsive() {
  return (
    // <>

    //  responsiveness
    // <div className='bg-red-500 md:bg-blue-500'>
    //     Hello
    // </div>
    //  </>

    /* Problem statement - 3 divs in a row , but on md 3 divs come one below the other */
         
    <div className="grid grid-cols-1 md:grid-cols-3">
    <div className="bg-red-500">Hello1</div>
    <div className="bg-green-500">Hello2</div>
    <div className="bg-yellow-500">Hello3</div>
  </div>
  );
}
