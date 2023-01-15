import * as React from "react";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

export default function Protected() {
  return (
    <>
      <h1>PROTECTED</h1>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={() => signOut()}>
        Sign out
      </Button>
    </>
  );
}
