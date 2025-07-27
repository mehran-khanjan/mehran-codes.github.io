import React from 'react';
import Head from "next/head";
import MainLayout from "@/components/templates/MainLayout";
import Home from "@/pages/index";
import {routes} from "@/utils/routes";

const Profile = () => {
    return (
        <>
            <div className="col-12">
                <h1>Profile</h1>

                <p>
                    Need to implement
                </p>
            </div>

        </>

    )
}

Profile.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout title={routes.profile.title}>
            {page}
        </MainLayout>
    )
}

export default Profile;