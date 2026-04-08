import { useStore } from "./store"; // Імпортуємо наш стор

export function Show() {
  // Дістаємо функцію закриття зі стору
  const closeModal = useStore((state) => state.closeModal);

  return (
    <div>
      <div>
        <p>HELLO</p>
        {/* При натисканні викликаємо closeModal */}
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
