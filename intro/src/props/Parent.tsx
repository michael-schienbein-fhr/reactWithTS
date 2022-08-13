import {Child, ChildAsFC} from "./Child"
const Parent = () => {
    const onClick = () => {
        console.log('CLICKED');
    }
    return (
        <>
            <Child color={'red'} onClick={onClick}>HELLO WORLD</Child>
        <ChildAsFC color={'blue'} onClick={onClick}>HELLO WARUDO</ChildAsFC>
        </>
    )
};

export default Parent;