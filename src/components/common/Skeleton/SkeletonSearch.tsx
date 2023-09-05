import { Skeleton, Stack } from "@mui/material";
import React, { FC } from "react";

const SkeletonSearch: FC = () => {
  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      <Skeleton variant="rounded" height={70} sx={{ bgcolor: "grey.200" }} />
      <Skeleton variant="rounded" height={70} sx={{ bgcolor: "grey.200" }} />
      <Skeleton variant="rounded" height={70} sx={{ bgcolor: "grey.200" }} />
      <Skeleton variant="rounded" height={70} sx={{ bgcolor: "grey.200" }} />
      <Skeleton variant="rounded" height={70} sx={{ bgcolor: "grey.200" }} />
      <Skeleton variant="rounded" height={70} sx={{ bgcolor: "grey.200" }} />
      <Skeleton variant="rounded" height={70} sx={{ bgcolor: "grey.200" }} />
      <Skeleton variant="rounded" height={70} sx={{ bgcolor: "grey.200" }} />
    </Stack>
  );
};
export default SkeletonSearch;
