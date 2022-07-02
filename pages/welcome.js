import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const loginForm = (req, res) => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default loginForm;
