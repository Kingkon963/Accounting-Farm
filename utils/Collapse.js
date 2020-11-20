export default function Collapse(props) {

    if(props.isOpen){
        return(
            <div className={props.className} >
                {props.children}
            </div>
        )
    }
    else{
        return(<></>);
    }   
}