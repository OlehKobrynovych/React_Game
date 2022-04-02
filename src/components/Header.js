import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Header() {

    // const [computer, setComputer] = useState(false)   //++
    const dispatch = useDispatch();
    const change = useSelector(state=>state.change)

    const hendleCheng = (el) => {
        dispatch({type: 'SET__CHANGE', payload: el})

    }
    // const hendleCheng = (el) => {
    //     dispatch({type: 'SET__CHANGE', payload: {id: el, computer: computer}})  //++

    // }

    return (
        <>
            {
                change === null && (
                    <div>
                        {/* <button onClick={()=>setComputer(true)} >Play computer</button>    */}
                        <div>Please select a player</div>
                        <label>
                            <input type='checkbox' onChange={()=>hendleCheng(1)} /> User1 (O)
                        </label>
                        <br/>
                        <label>
                            <input type='checkbox' onChange={()=>hendleCheng(2)} /> User2 (X)
                        </label>
                    </div>
                ) 
            }
        </>
    );
}

export default Header;
