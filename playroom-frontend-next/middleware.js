// export { default } from "next-auth/middleware"
import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: '/',
    error: '/error',
  }
})

export const config = { 
  // matcher: ["/notes", "/piles", "/user", "/introspect", "/onboard",] 
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*.svg).*)']
}
