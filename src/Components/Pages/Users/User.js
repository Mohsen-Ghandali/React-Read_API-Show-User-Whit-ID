import { memo } from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    return (
        <div className="card d-inline-block shadow-lg border-0 m-2 w-25 text-start " >
            <div className="card-header bg-secondary text-center">
                <Link className="text-white" to={`/users/${user.id}`}>{user.name}</Link>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="fw-semibold text-danger">Username: </span>{user.username}
                </li>
                <li className="list-group-item">
                    <span className="fw-semibold text-danger">Email: </span>{user.email}
                </li>
                <li className="list-group-item">
                    <span className="fw-semibold text-danger">Phone: </span>{user.phone}
                </li>
                <li className="list-group-item"><span className="fw-semibold text-danger">Company: </span>{user.company.name}</li>
            </ul>
        </div>
    );
}

export default memo(User);