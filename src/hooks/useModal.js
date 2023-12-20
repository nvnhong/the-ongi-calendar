import { useState } from "react";

export default function useModal() {
  const [isModal, setIsModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  return {
    isModal,
    handleOpenModal,
    handleCloseModal,
    selectedValue,
    setSelectedValue,
  };
}
