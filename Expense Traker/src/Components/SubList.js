import "./SubList.css";
const SubList = (props)=>{
    return(
        <>
            <div className="list">
                <p>{props.data.Iname}</p>
                <p>{props.data.amount}</p>
            </div>
        </>
    );
}
export default SubList;