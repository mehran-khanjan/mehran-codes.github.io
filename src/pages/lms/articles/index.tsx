import React from 'react';
import MainLayout from "@/components/templates/MainLayout";
import {routes} from "@/utils/routes";

const Articles = () => {
    return(
        <>
            Articles
        </>
    )
}

Articles.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout title={routes.articles.title}>
            {page}
        </MainLayout>
    )
}

export default Articles;