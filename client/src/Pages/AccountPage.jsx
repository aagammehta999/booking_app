import { useContext } from "react";
import { UserContext, useState } from "../../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
function AccountPage() {
  const { ready, user } = useContext(UserContext);
  const { subpage } = useParams();
  async function logout (){
    await axios.post('/logout');
    setRedirect('/'); 
  }
  
  
  if (!ready) {
    return "Loading ";
  }
  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }
  if (subpage === undefined) {
    subpage = "profile";
  }

  function linkClasses(type = null) {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += "bg-primary text-white rounded-full";
    }
    return classes;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-4">
        <Link className={linkClasses("profile")} to={"/account"}>
          My profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My Accomodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center">
          Logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>{" "}
        </div>
      )}
    </div>
  );
}
export default AccountPage;
