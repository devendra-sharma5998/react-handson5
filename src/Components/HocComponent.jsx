import React from 'react'

const HocComponent=(wrappedComponent)=>{


function HocComponent () {
    const [counter,setcounter]=useState(0);
    const UpdateCounter=()=>{
        setcounter(counter+1)
    }
  return (
    <div>
        <div>
            <wrappedComponent counter={counter} UpdateCounter={UpdateCounter}/>
        </div>
    </div>
  )
}
return HocComponent;
}
export default HocComponent