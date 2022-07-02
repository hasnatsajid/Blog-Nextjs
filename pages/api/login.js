import { getSession } from 'next-auth/react';
import jwt from 'jsonwebtoken';

// const KEY = 'jdfyaleelaldjbcjgowf84f566fw64f';

export default async function (req, res) {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content: 'This is protected content. You can access this content because you are signed in.',
    });
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }

  //   console.log('login api', req.body);
  //   if (!req.body) {
  //     res.status(404).end('Error');
  //     return;
  //   }

  //   const { username, password } = req.body;

  //   res.json({
  //     token: jwt.sign(
  //       {
  //         username,
  //         admin: username === 'Hasnat' && password === 'admin',
  //       },
  //       KEY
  //     ),
  //   });
}
