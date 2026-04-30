import "server-only";

import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import adminUser from "@/data/admin-user.json";

export const adminSessionCookie = "cloud_admin_session";

type Credentials = {
  username: string;
  password: string;
};

export function validateCredentials(credentials: Credentials) {
  return (
    safeEqual(credentials.username, adminUser.username) &&
    safeEqual(credentials.password, adminUser.password)
  );
}

export function createSessionValue() {
  return createHash("sha256")
    .update(`${adminUser.username}:${adminUser.password}`)
    .digest("hex");
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const session = cookieStore.get(adminSessionCookie)?.value;

  return session === createSessionValue();
}

export async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect("/login");
  }
}

function safeEqual(value: string, expected: string) {
  const valueBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);

  if (valueBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(valueBuffer, expectedBuffer);
}
