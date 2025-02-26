import { Button } from "react-bootstrap";
import { getProfileUser } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileUserPage = () => {
  const profileuser = useSelector((state) => {
    console.log(state);
    return state.profileuser.content;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(profileuser);

  return (
    <div className="border rounded m-3 bg-white p-4 small">
      <h5 className="m-0" style={{ fontSize: "1rem" }}>
        Altre visualizzazioni
      </h5>
      <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
        <i className="bi bi-eye-fill me-1"></i>
        Solo per te
      </p>
      {profileuser
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
        .map((user) => (
          <div key={user._id} className="d-flex align-items-start pb-4 border-bottom">
            <img
              src={user.image}
              alt="Profile"
              className="rounded-circle me-1 img-fluid"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
              }}
            />
            <div>
              <p className="m-0" style={{ fontSize: "1rem" }}>
                {user.name} {user.surname}
              </p>
              <p className="mb-2" style={{ fontSize: "0.85rem" }}>
                {user.title}
              </p>
              <Button
                variant="outline-secondary"
                className="rounded-pill btn-sm flex-grow-1 flex-md-grow-0"
                style={{ width: "100px" }}
              >
                <i className="bi bi-person-plus-fill me-2"></i>
                Collegati
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ProfileUserPage;
