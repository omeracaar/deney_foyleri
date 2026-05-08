import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DraggableItem from "./DraggableItem";
import DropSlot from "./DropSlot";

function Experiment({ experiment }) {
  const [slots, setSlots] = useState({});
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [brightness, setBrightness] = useState(0);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const draggedComponentId = active.id;
    const targetSlotId = over.id;

    setSlots((prev) => {
      const updatedSlots = { ...prev };

      Object.keys(updatedSlots).forEach((slotId) => {
        if (updatedSlots[slotId] === draggedComponentId) {
          delete updatedSlots[slotId];
        }
      });

      updatedSlots[targetSlotId] = draggedComponentId;

      return updatedSlots;
    });

    setMessage("");
    setIsSuccess(false);
    setBrightness(0);
  };

  const getComponentById = (id) => {
    return experiment.components.find((component) => component.id === id);
  };

  const checkAnswer = () => {
    const userOrder = experiment.slots.map((slot) => slots[slot.id]);

    const isCorrect =
      JSON.stringify(userOrder) === JSON.stringify(experiment.correctOrder);

    if (isCorrect) {
      setIsSuccess(true);

      if (experiment.successAction === "bell") {
        setMessage("Doğru bağlantı! Zil çalıştı.");

        const bellComponent = experiment.components.find(
          (component) => component.id === "bell"
        );

        if (bellComponent?.sound) {
          const audio = new Audio(bellComponent.sound);

          audio.play().catch((error) => {
            console.error("Zil sesi çalınamadı:", error);
          });
        }
      } else if (experiment.successAction === "lamp") {
        setMessage("Doğru bağlantı! Lamba yandı. Dimmer ile parlaklığı ayarlayabilirsin.");
      } else {
        setMessage("Doğru bağlantı!");
      }
    } else {
      setMessage("Bağlantı hatalı. Malzemeleri tekrar kontrol et.");
      setIsSuccess(false);
    }
  };

  const resetExperiment = () => {
    setSlots({});
    setMessage("");
    setIsSuccess(false);
    setBrightness(60);
  };

  const usedComponentIds = Object.values(slots);

  const availableComponents = experiment.components.filter(
    (component) => !usedComponentIds.includes(component.id)
  );

  const showDimmerControl =
    isSuccess && experiment.successAction === "lamp";

  return (
    <div className="experiment-container">
      <div className="experiment-header">
        <h1>{experiment.title}</h1>
        <p>{experiment.description}</p>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="experiment-content">
          <div className="materials-panel">
            <h2>Malzemeler</h2>

            <div className="materials-list">
              {availableComponents.length > 0 ? (
                availableComponents.map((component) => (
                  <DraggableItem key={component.id} component={component} />
                ))
              ) : (
                <p className="empty-materials">Tüm malzemeler yerleştirildi.</p>
              )}
            </div>
          </div>

          <div className="workspace-panel">
            <h2>Deney Alanı</h2>

            <div className="slots-row">
  {experiment.slots.map((slot, index) => {
    const placedComponentId = slots[slot.id];
    const placedComponent = getComponentById(placedComponentId);

    const nextSlot = experiment.slots[index + 1];
    const nextPlacedComponentId = nextSlot ? slots[nextSlot.id] : null;

    const isCurrentFilled = Boolean(placedComponentId);
    const isNextFilled = Boolean(nextPlacedComponentId);
    const isConnectorActive = isCurrentFilled && isNextFilled;

    return (
      <div className="slot-connection-group" key={slot.id}>
        <DropSlot
          slot={slot}
          placedComponent={placedComponent}
          isSuccess={isSuccess}
          brightness={brightness}
        />

        {index < experiment.slots.length - 1 && (
          <div className={`connector ${isConnectorActive ? "active" : ""}`}>
            <div className="connector-dot"></div>
            <div className="connector-line"></div>
            <div className="connector-dot"></div>
          </div>
        )}
      </div>
    );
  })}
</div>

            {showDimmerControl && (
              <div className="dimmer-control">
                <label htmlFor="brightness">
                  Dimmer Parlaklığı: %{brightness}
                </label>

                <input
  id="brightness"
  type="range"
  min="0"
  max="100"
  value={brightness}
  onChange={(event) => setBrightness(Number(event.target.value))}
/>
              </div>
            )}

            <div className="actions">
              <button onClick={checkAnswer}>Kontrol Et</button>

              <button onClick={resetExperiment} className="secondary-button">
                Sıfırla
              </button>
            </div>

            {message && (
              <div className={`message ${isSuccess ? "success" : "error"}`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </DndContext>
    </div>
  );
}

export default Experiment;