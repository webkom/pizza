'use client';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation'



export default function SignOut() {
  localStorage.removeItem("userNamePizza")
  redirect("./login");

  return (<></>)
}
