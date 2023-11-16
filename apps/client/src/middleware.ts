import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import type { NextRequest } from 'next/server';

export default authMiddleware({
  publicRoutes: (req: NextRequest) => req.nextUrl.pathname === '/',

  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    return null;
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
