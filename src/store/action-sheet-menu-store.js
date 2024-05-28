import { create } from 'zustand'

export const useActionSheetMenuStore = create((set) => ({
    showMenu: false,
  setShowMenu: (showMenu) => set({ showMenu }),
}))
