import { useEffect } from "react";

export default function UseEffect() {
    useEffect(function(){
        alert("Hello")           //alert twice
    }, [])

  return <div>Hi there</div>;
}
