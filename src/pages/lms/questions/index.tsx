import React from 'react';
import MainLayout from "@/components/templates/MainLayout";

const Questions = () => {
    return(
        <>
            Questions
        </>
    )
}

Questions.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout title={'Questions'}>
            {page}
        </MainLayout>
    )
}

export default Questions;