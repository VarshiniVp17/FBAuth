import { useNavigate } from "react-router-dom";
import { auth, facebookProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("User Info:", result.user);
      navigate("/home");
    } catch (error) {
      console.error("Facebook Login Error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <img src="/src/assets/images/FB.ico" alt="" />
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login Page</h2>
        <button
          onClick={handleFacebookLogin}
          className="btn btn-primary w-100 py-2"
        >
          Login with Facebook
        </button>
        <p className="text-center mt-3">ⓕ</p>
      </div>
    </div>
  );
};

export default Login;
