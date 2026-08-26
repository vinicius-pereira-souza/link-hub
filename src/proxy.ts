import { auth } from "@/lib/auth/server";

export default auth.middleware({
  // Redirects unauthenticated users to sign-in page
  loginUrl: "/sign-in",
});

export const config = {
  // Protected routes requiring authentication
  matcher: ["/dashboard/:path*"],
};
