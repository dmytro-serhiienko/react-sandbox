import { Show } from "./Show";
import { useStore } from "./store"; // Імпортуємо наш стор

export function Modal5() {
  // Використовуємо стан зі стору замість локального useState
  const isModalOpen = useStore((state) => state.isModalOpen);
  const openModal = useStore((state) => state.openModal);

  return (
    <div>
      <button type="button" onClick={openModal}>
        Show Please
      </button>

      {isModalOpen && <Show />}
    </div>
  );
}
