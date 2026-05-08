import { useDroppable } from "@dnd-kit/core";

function DropSlot({ slot, placedComponent, isSuccess, brightness }) {
  const { isOver, setNodeRef } = useDroppable({
    id: slot.id,
  });

  const isLamp = placedComponent?.id === "lamp";

  let imageSrc = placedComponent?.image;

  if (isSuccess && placedComponent) {
    if (isLamp) {
      imageSrc =
        brightness === 0
          ? placedComponent.image
          : placedComponent.activeImage || placedComponent.image;
    } else {
      imageSrc = placedComponent.activeImage || placedComponent.image;
    }
  }

  const isActiveLamp =
    isSuccess &&
    isLamp &&
    brightness > 0 &&
    placedComponent?.activeImage;

  const lampStyle = isActiveLamp
    ? {
        filter: `brightness(${brightness / 50})`,
        opacity: Math.max(brightness / 100, 0.35),
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      className={`drop-slot ${isOver ? "over" : ""}`}
    >
      <span className="slot-label">{slot.label}</span>

      {placedComponent ? (
        <div className={`placed-component ${isActiveLamp ? "lamp-active" : ""}`}>
          {imageSrc && (
            <img
              src={imageSrc}
              alt={placedComponent.name}
              className="component-image"
              style={lampStyle}
            />
          )}

          <span>{placedComponent.name}</span>
        </div>
      ) : (
        <div className="empty-text">Buraya bırak</div>
      )}
    </div>
  );
}

export default DropSlot;