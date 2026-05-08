import { useDraggable } from "@dnd-kit/core";

function DraggableItem({ component }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: component.id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="draggable-item"
      {...listeners}
      {...attributes}
    >
      {component.image && (
        <img
          src={component.image}
          alt={component.name}
          className="component-image"
        />
      )}

      <span>{component.name}</span>
    </div>
  );
}

export default DraggableItem;