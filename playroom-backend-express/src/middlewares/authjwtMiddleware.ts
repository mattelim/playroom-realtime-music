import { decode } from 'next-auth/jwt';
// import { getToken } from 'next-auth/jwt';
import { dbUserCheck } from '../common/dbFunctions';

async function authjwtMiddleware(req, res, next) {
  // console.log("someone tried to access data");
  // console.log(req.headers);

  const sessionCookie = req.headers.cookie?.split(';').find(c => c.trim().startsWith('__Secure-next-auth.session-token='));

  if (!sessionCookie) {
    // If __session cookie is not found, return unauthorized
    console.log("No session cookie found");

    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = sessionCookie.split('=')[1];

  // console.log("token: " + token);

  try {
    const decoded = decode({
      token: token,
      secret: process.env.NEXTAUTH_SECRET,
    });
    decoded.then((result) => {
      // console.log(result);
      // console.log("User ID: " + result.sub);
      // console.log("decoded: " + JSON.stringify(result));
      req.auth = {
        userId: result.sub,
      }
      const dbUser = dbUserCheck(result);
      dbUser.then((dbUserResult) => {
        console.log("dbUserResult: " + JSON.stringify(dbUserResult.name));
        if (dbUserResult.status === -1) {
          res.status(401).json({ status: -1, message: 'Your sign up has not been approved. Please wait for the approval email 🙏' });
        } else {
          // append dbUserResult to req.auth
          req.auth.dbUser = dbUserResult;
          next();
        }
      });
    });
    // console.log("decoded: " + decoded);
    // req.user = decoded;
  } catch (error) {
    console.log("error: " + error);
    res.status(401).json({ message: 'Unauthorized' });
  }
}

export default authjwtMiddleware;