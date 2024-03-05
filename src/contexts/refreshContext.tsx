import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";


interface RefreshPageProps {
    refreshKey: boolean;
    toggleRefreshData: () => void;
}
const RefreshPageContext = createContext<RefreshPageProps | null>(null);

export const useRefreshPage = () => {
    return useContext(RefreshPageContext);
}

const RefreshPageProvider = ({ children }: any) => {

    const [refreshKey, setRefreshKey] = useState(false);
    
    const toggleRefreshData = () => {
        setRefreshKey((prev) => !prev);
    }

    useEffect(() => {
        toggleRefreshData();
    }, []);


    const values = {
        refreshKey,
        toggleRefreshData
    }

    return <RefreshPageContext.Provider value={values}>{children}</RefreshPageContext.Provider>

}

export { RefreshPageProvider };