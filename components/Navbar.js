import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';

// Top navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext);
  const router = useRouter();

  const signOut =  () => {
    auth.signOut();
    router.reload();
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <img src={'./Logo.png'}/>
          </Link>
        </li>

        {username && (
          <>
            <li className="push-left">
              <button onClick={signOut}>Sair</button>
            </li>
            <li>
              <Link href={`/${username}`}>
                <button className="btn">Perfil</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL}/>
              </Link>
            </li>
            <li className="push-right">
                <p className="">{user.points}</p>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Entrar</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}