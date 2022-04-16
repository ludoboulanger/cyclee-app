import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const containerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  width: "100%",
};

interface Props {
  children: React.ReactNode;
  errorText: string | undefined;
  labelText: string | undefined;
  fieldName: string | undefined;
}

export default function FormField({
  children,
  errorText,
  labelText,
  fieldName,
}: Props) {
  return (
    <Box sx={containerStyle}>
      <label htmlFor={fieldName}>{labelText}</label>
      {children}
      {errorText && (
        <Typography variant="caption" sx={{ color: "error.main" }}>
          {errorText}
        </Typography>
      )}
    </Box>
  );
}
