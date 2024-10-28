import { Button } from "./ui/button";

// eslint-disable-next-line react/prop-types
export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Button
      variant="ghost"
      className={'border'}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        borderRadius: '8px',
        justifyContent: 'center',
        paddingVertical: '15px',
      }}
      draggable
    >
      <span>
        {icon}
      </span>
      <span >{label}</span>
    </Button>
  );
};
