import { Typography } from "@mui/material";
import Link from "./Link";

export default function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/MarcusviniciusLsantos" target="_blank">
          Marcus Vinícius
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }