import { create } from 'zustand'

export const useSettingsStore = create((set) => ({
    isDarkMode: false,
    toggleDarkMode: () => set((state) => ({isDarkMode: !state.isDarkMode})),

    radioValue: '2',
    setRadioValue: (value) => set({radioValue: value}),

    inputValue: '',
    setInputValue: (value) => set({inputValue: value}),

}))