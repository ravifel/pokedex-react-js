import React from "react";
import { Skeleton, Container } from "@mui/material";

export const Skeletons = () => {
  return (
    <div>
      <Container maxWidth="xxl">
        <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em"}}/>
        <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em"}}/>
        <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em"}}/>
        <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em"}}/>
        <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em"}}/>
      </Container>
    </div>
  );
};
