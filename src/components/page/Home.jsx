import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
// import { signOut } from 'firebase/auth';

const Home = () => {
  // const navigate = useNavigate();
  // const [user, loading, error] = useAuthState(auth);

  // const handleLogout = () => {
  //   signOut(auth).then(() => {
  //     navigate("/login");
  //     console.log('Signed Out');
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }

  // if (loading) return <p> User info loading....</p>

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div>Welcome, </div>
      <button className="bg-black text-white tounded mt-9 p-1">Logout</button>
    </div>
  );
};

export default Home;
