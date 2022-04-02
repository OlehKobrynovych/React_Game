import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Main() {

    const win = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ]
    const [winer, setWiner] = useState(null)
    const dispatch = useDispatch();
    const change = useSelector(state=>state.change)
    const items = useSelector(state=>state.items)
    // const computer = useSelector(state=>state.computer)  //++

    const handleClick = (id) => {
        if (change) {
            dispatch({type:'SET_ITEM_ID', payload: {id: id, user: change}})
            dispatch({type:'SET_CHANGE', payload: change })
        }
    }
    
    const restart = () => {
        dispatch({type:'SET_RESTART_ITEMS'})
        setWiner(null)
    }

    useEffect(()=>{
        if (change === 1) {
            getWinerUser(2)
        }
        if (change === 2) {
            getWinerUser(1)
        }
    },[change])

    const getWinerUser = (id) => {
        // debugger
        const user = items.filter(el => el.user === id);
            
        const value = win.some(element=>element.every(el => user.some(ell=>ell.id===el)));
        
        if (value) {
            setWiner(`User${id} winner`);
        }
    }

    
    return (
        <>
            {!!change && (
                <div>
                    {!!winer && (<div className="winer" >{winer}</div>)}
                
                    <div className='wrapper'>
                        {
                            !!change && items.map(el=>(
                                <div 
                                    key={el.id}
                                    onClick={()=>!el.user && !winer ? handleClick(el.id) : null} 
                                    className={`item ${el.user === 1 ? 'item--red' : el.user === 2 ? 'item--blue' : ''}`}
                                >
                                    {el.id}
                                </div>
                            ))
                        }
                            </div>
                        <div>
                        
                        {!!change && <button onClick={()=>restart()}>Restart</button>}
                    </div>
                </div>
            )}
        </>
    );
}

export default Main;
