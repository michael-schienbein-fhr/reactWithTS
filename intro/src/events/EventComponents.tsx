const EventComponent: React.FC = () => {
    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
      console.log(e)
    };
    const onDragStart = (event: React.DragEvent<HTMLInputElement>) => {
        console.log(event.nativeEvent);
    }
    return (
        <div>
            <input onChange={onChange}/>
            <div draggable onDragStart={onDragStart}>DRAG ME</div>
        </div>
    );
}

export default EventComponent;