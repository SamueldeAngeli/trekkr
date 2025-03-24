import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import PhotoPost from '../Posts/Photoposts';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export function Home() {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <PhotoPost />
        </div>
    )
}