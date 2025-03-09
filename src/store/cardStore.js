import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCardStore = create(
    persist(
        (set) => ({
            // State
            cards: [],

            // Actions
            setCards: (cards) => set({ cards }),

            addCard: (newCard) => set((state) => ({
                cards: [...state.cards, newCard]
            })),

            removeCard: (cardId) => set((state) => ({
                cards: state.cards.filter((card) => card.id !== cardId)
            })),

            moveCard: (cardId, targetColumn, beforeId) => set((state) => {
                const copy = [...state.cards];
                let cardToTransfer = copy.find((c) => c.id === cardId);

                if (!cardToTransfer) return state;

                cardToTransfer = { ...cardToTransfer, column: targetColumn };
                const filteredCards = copy.filter((c) => c.id !== cardId);

                if (beforeId === '-1') {
                    return { cards: [...filteredCards, cardToTransfer] };
                } else {
                    const insertAtIndex = filteredCards.findIndex((el) => el.id === beforeId);
                    if (insertAtIndex === -1) return state;

                    filteredCards.splice(insertAtIndex, 0, cardToTransfer);
                    return { cards: filteredCards };
                }
            }),
        }),
        {
            name: 'kanban-storage', // unique name for localStorage
        }
    )
);

export default useCardStore; 