import { useRef, useState } from "react";

export default function useImage() {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage.size > 1024 * 1024) {
      alert("이미지는 1MB 이상 업로드할 수 없습니다.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onloadend = () => {
      setImage(selectedImage);
      setPreviewImage(reader.result);
    };
  };

  return { image, previewImage, inputRef, handleImageChange };
}
