export const renderData = (data: string) => {
  if (data === "true") {
    return true;
  } else if (data === "false") return false;
  return data;
};
