import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Home = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  if (!user) {
    navigate("/");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">Welcome to Your Home Page</h2>
        {user && (
          <div className="text-center">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt="User Avatar"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px" }}
            />
            <h4>{user.displayName}</h4>
            <p>{user.email}</p>
            <button
              onClick={handleLogout}
              className="btn btn-danger w-100 py-2"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
