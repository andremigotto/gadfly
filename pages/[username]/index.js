import { getUserWithUsername, postToJSON } from '../../lib/firebase'
import UserProfile from '../../components/UserProfile';

export async function getServerSideProps({ query }) {
  const { username } = query;

  const userDoc = await getUserWithUsername(username);

  // If no user, short circuit to 404 page
  if (!userDoc) {
    return {
      notFound: true,
    };
  }

    // JSON serializable data
    let user = null;

  if (userDoc) {
    user = userDoc.data();
  }

  return {
    props: { user }, // will be passed to the page component as props
  };
}

export default function UserProfilePage({ user }) {
  return (
    <main>
      <meta title={user.username}/>
      <UserProfile user={user} />
    </main>
  );
  }
