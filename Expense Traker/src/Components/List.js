import "./List.css";
import SubList from "./SubList";
const List = (props)=>{
    return(
        <>
        {
            props.item.map((props,index)=>{
                return <SubList data={props} key={index}/>
            })
        }
        </>
    );
}
export default List;