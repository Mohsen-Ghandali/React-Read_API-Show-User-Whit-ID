import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowUser = () => {
    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchUser = useCallback(async () => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const res = await data.json();
            setUser(res);
        } catch (error) {
            setError(error.message);
            setLoading(true)
        }
    }, [id]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <>
            {loading && <div className="text-center mt-5"><span className="spinner-border spinner-border-sm" ></span></div>}

            {error && <div className="text-center"><p className="text-danger">{error}</p></div>}

            {user && (
                <div className="card d-inline-block shadow-lg border-0 col-6 text-start my-5 offset-3">
                    <div className="card-header bg-secondary text-center text-white">{user.name}</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="fw-semibold text-danger">Username: </span>
                            {user.username}
                        </li>
                        <li className="list-group-item">
                            <span className="fw-semibold text-danger">Email: </span>
                            {user.email}
                        </li>
                        <li className="list-group-item">
                            <span className="fw-semibold text-danger">Phone: </span>
                            {user.phone}
                        </li>
                        <li className="list-group-item">
                            <span className="fw-semibold text-danger">Company: </span>
                            {user.company.name}
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default ShowUser;
