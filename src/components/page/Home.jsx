import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed Out");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(user);

  if (loading)
    return (
      <p className="flex justify-center items-center"> User info loading....</p>
    );

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div>Welcome, {user.email}</div>
      <button
        className="bg-black text-white tounded mt-9 p-1"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
