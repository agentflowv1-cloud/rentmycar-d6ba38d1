import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  login: (user: any) => void;
  register: (user: any) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  register: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export { useAuthStore };