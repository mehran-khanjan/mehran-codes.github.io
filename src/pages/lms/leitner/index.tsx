import React from 'react';
import MainLayout from "@/components/templates/MainLayout";

const Leitner = () => {
    return(
        <>
            Leitner
        </>
    )
}

Leitner.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout title={'Leitner'}>
            {page}
        </MainLayout>
    )
}

export default Leitner;