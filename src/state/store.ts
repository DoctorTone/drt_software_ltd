import { create } from "zustand";

type SiteState = {
  showContactModal: boolean;
  setShowContactModal: (status: boolean) => void;
};

const useStore = create<SiteState>((set) => ({
  showContactModal: false,
  setShowContactModal: (status) => set(() => ({ showContactModal: status })),
}));

export default useStore;
