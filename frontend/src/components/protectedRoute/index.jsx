import { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { GetUser, Logout } from "../../api/config";
import { GlobalContext } from "../../providers/context";
import Loading from "../loading";

export default function ProtectedRoute({ children }) {
    const { getUser, setUser } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (
            localStorage.getItem("ifsolve_token") === null ||
            localStorage.getItem("ifsolve_user") == null
        ) {
            localStorage.clear();
            navigate("/");
        }

        setUser(null);

        GetUser()
            .then((res) => {
                setUser(res.data);
                localStorage.setItem("ifsolve_user", JSON.stringify(res.data));
            })
            .catch(() => {
                localStorage.clear();
                navigate("/");
                Logout().then((res) => {
                    console.log(res);
                });
            });
    }, []);

    return getUser ? children : <Loading />;
}
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
