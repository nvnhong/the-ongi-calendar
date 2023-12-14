import Common from "@components/common";
import ImageModal from "@components/Modal/ImageModal";
import { useQueries } from "@tanstack/react-query";
import { getUserImages } from "@api/photoApi";
import { getUserInfo, getUserPost, logout } from "@api/userApi";
import useModal from "@hooks/useModal";
import useImageDelete from "@hooks/useImageDelete";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MyPage() {
  const navigate = useNavigate();
  const quries = useQueries({
    queries: [
      { queryKey: ["user"], queryFn: getUserInfo },
      { queryKey: ["userPost"], queryFn: getUserPost },
      { queryKey: ["userImage"], queryFn: getUserImages },
    ],
  });

  const [userInfoQuery, userPostQuery, userImageQuery] = quries;
  const userInfo = userInfoQuery.data;
  const userPost = userPostQuery.data;
  const userImage = userImageQuery.data;
  const isLoading = quries.some((query) => query.isLoading);

  const imageModal = useModal();
  const [selectedImage, setSelectedImage] = useState({
    id: "",
    month: "",
    photoURL: "",
  });

  const handleImageClick = (imageInfo) => {
    imageModal.handleOpenModal();
    setSelectedImage(imageInfo);
  };

  const imageDeleteMutation = useImageDelete(
    selectedImage.id,
    imageModal.handleCloseModal
  );

  if (isLoading) {
    return (
      <>
        <Common.Loading />
      </>
    );
  }

  return (
    <Common.Layout>
      <Common.Header />

      <Common.VStack className="justify-center items-center gap-2 py-4">
        <Common.TextBox className="flex justify-center items-center text-[18px] font-semibold">{`${userInfo.username}(${userInfo.phoneNum})`}</Common.TextBox>
        <Button variant="outlined" className="h-[26px]" onClick={logout}>
          로그아웃
        </Button>
      </Common.VStack>

      <div className="py-4">
        <Accordion>
          <AccordionSummary
            sx={{ bgcolor: "#f3f4f6" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Common.TextBox className="font-semibold">{`작성한 소망 개수 ${userPost.length} / 5개`}</Common.TextBox>
          </AccordionSummary>
          <AccordionDetails>
            <Common.VStack className="mx-1">
              {userPost.map((data) => (
                <Common.List
                  key={data.id}
                  value={data}
                  onListClick={() =>
                    navigate(`/post/${data.id}`, {
                      state: { ...data, state: "edit" },
                    })
                  }
                />
              ))}
            </Common.VStack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{ bgcolor: "#f3f4f6" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Common.TextBox className="font-semibold">{`업로드한 이미지 개수 ${userImage.length}개`}</Common.TextBox>
          </AccordionSummary>
          <AccordionDetails>
            <div className="grid grid-cols-3">
              {userImage.map((data, index) => (
                <div key={index} className="h-[100px]">
                  <img
                    src={data.photoURL}
                    className="w-full h-full object-cover"
                    onClick={() => handleImageClick(data)}
                  />
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      {imageModal.isModal && (
        <ImageModal
          image={selectedImage}
          handleCloseModal={imageModal.handleCloseModal}
          handleDeleteEvent={imageDeleteMutation.mutate}
        />
      )}
    </Common.Layout>
  );
}
