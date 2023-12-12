export const validateName = (name) => {
  const regex = /^[가-힣]{2,}$/;
  // 한글만 포함되고 자음과 모음이 따로 오지 않도록 확인
  const isSeparatedJamo = /([ㄱ-ㅎㅏ-ㅣ])\1/.test(name);
  return !regex.test(name) || isSeparatedJamo;
};

export const validatePhone = (phone) => {
  return !/^\d{4}$/.test(phone);
};
