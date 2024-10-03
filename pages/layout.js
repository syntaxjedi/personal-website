import { Inter } from "next/font/google";
import "/src/app/globals.css";
import NavBar from "/src/_components/navbar";
import { red } from "@mui/material/colors";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      <main style={{marginTop: 65}}>{children}</main>
    </>
  );
}
