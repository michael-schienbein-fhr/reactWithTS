interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({ color, onClick, children}: ChildProps) => {
    return (
        <div style={{color}}>
            {children}
            <button onClick={onClick}>Click me</button>
        </div>
    )
};

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children: children}) => {
    return (
        <div style={{color}}>
            {children}
            <button onClick={onClick}>Click me</button>
        </div>
    )
}

