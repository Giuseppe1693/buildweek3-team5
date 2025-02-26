import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileUser } from "../redux/actions";

const UserYouKnow = () => {
  const profileuser = useSelector((state) => {
    return state.profileuser.content;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border rounded m-3 bg-white p-4 small">
      <h5 className="m-0" style={{ fontSize: "1rem" }}>
        Persone che potresti conoscere
      </h5>
      <p className="text-secondary mb-0" style={{ fontSize: "0.9rem" }}>
        Dalla tua scuola o università
      </p>
      {profileuser
        .sort(() => 0.5 - Math.random())
        .slice(0, 6)
        .map((user) => (
          <div key={user._id} className="d-flex align-items-start pt-3 pb-4 border-bottom">
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
export default UserYouKnow;
