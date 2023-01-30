import React ,{useState} from 'react'

const RenderingMultipleComponentsOrElement = () => {
    // const [attendes,setAttendes] = useState(['Shiva', 'Prasanna', 'Pramod', 'Tej', 'Kemp', 'Avi', 'Prajwal']);
    const [attendes,setAttendes]=useState([{firstName:'Shiva',lastName:'kumar'},{firstName:'Pramod',lastName:'D.K'},{firstName:'Tejas',lastName:'Raguveer'}])

    const [inp,setInp]=useState({
        firstName:"",
        lastName:""
    });
    const handelChange=()=>{
        const upadtes=[...attendes];
        upadtes.push(inp);
        // upadtes.sort();
        setAttendes(upadtes)
        setInp("");
    }
    return (
        <div>{
            attendes.map((item,idx)=>{
              return  <li key={idx}>{item.firstName} : {item.lastName}</li>
            })
        }
        <br/><br/><br/>
        <div>
            <input type='text' value={inp.firstName} onChange={(event)=>{
                const updateName={...inp};
                updateName.firstName=event.target.value
                setInp(updateName);
            }} />
            <input type='text' value={inp.lastName} onChange={(event)=>{
                const updateName={...inp};
                updateName.lastName=event.target.value
                setInp(updateName);
            }} />
            <button onClick={handelChange}>Click to Add</button>
        </div>
</div>
    )
}

export default RenderingMultipleComponentsOrElement