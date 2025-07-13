import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { getPermissions } from '../services/getPermissions';
import { Navigate } from 'react-router-dom';
import Loader from '../helpers/Loader';


export default function ProtectedRoute({ children, requiredAccess = [] }) {

    const userContext = useContext(UserContext);
    const user = userContext && userContext.user ? userContext.user : userContext;
    const userAccess = user ? user.access : [];

    const [hasAccess, setHasAccess] = useState(null);

    useEffect(() => {
        if (!user) return;

        async function checkAccess() {
            const result = await getPermissions(requiredAccess, userAccess);
            setHasAccess(result);
        }

        checkAccess();
    }, [requiredAccess, user]);

    if (!user || hasAccess === null) {
        return <Loader />;
    }

    if (!hasAccess) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}
