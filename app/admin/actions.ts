"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminSessionCookie } from "../lib/auth";

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(adminSessionCookie);
  redirect("/login");
}
