import React from "react";
import "./globals.css";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
  return <div />;
}
