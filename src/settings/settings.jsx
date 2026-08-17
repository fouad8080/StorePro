import React from "react";
import { useState, useEffect } from "react";
import {Store,Users,Bell,SettingsIcon,ShieldAlert ,CloudBackup,Crown} from "lucide-react";

function Settings() {
    return (
        <div className="p-5">
            <h1 className="font-semibold text-2xl">Settings</h1>
            <p className="text-gray-600 font-semibold">Manage your store preferences</p>
            <div className="flex flex-col mt-5 space-y-4 border rounded-2xl border-gray-400 shadow p-5 *:border-b *:pb-4 *:border-gray-300">
                <div className="flex items-center justify-between">
                    <div className="flex items-center ">
                        <Store className="w-13 h-13 p-3 text-sm dark:text-black bg-green-200 rounded-2xl" />
                        <div className="flex flex-col pl-4  space-x-2">
                            <h2 className="font-semibold text-lg">Store Profile</h2>
                            <p className="text-gray-600">Manage your store settings and preferences</p>
                        </div>
                    </div>
                    <button className="bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded">Edit</button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center ">
                        <Users className="w-13 h-13 p-3 text-sm dark:text-black bg-green-200 rounded-2xl" />
                        <div className="flex flex-col pl-4  space-x-2">
                            <h2 className="font-semibold text-lg">User Management</h2>
                            <p className="text-gray-600">Manage user accounts and permissions</p>
                        </div>                
                    </div>
                    <button className="bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded">Edit</button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Bell className="w-13 h-13 p-3 text-sm dark:text-black bg-green-200 rounded-2xl" />
                        <div className="flex flex-col pl-4  space-x-2">
                            <h2 className="font-semibold text-lg">Notifications</h2>
                            <p className="text-gray-600">Manage notification settings and preferences</p>
                        </div>
                    </div>
                    <button className="bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded">Edit</button>
                </div>
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <SettingsIcon className="w-13 h-13 p-3 text-sm dark:text-black bg-green-200 rounded-2xl" />
                        <div className="flex flex-col pl-4  space-x-2">
                            <h2 className="font-semibold text-lg">General Settings</h2>
                            <p className="text-gray-600">Manage system settings and configurations</p>
                        </div>
                    </div>
                    <button className="bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded">Edit</button>
                </div>
                <div className="flex items-center  justify-between">
                    <div className="flex items-center">
                        <ShieldAlert className="w-13 h-13 p-3 text-sm dark:text-black bg-green-200 rounded-2xl" />
                        <div className="flex flex-col pl-4  space-x-2">
                            <h2 className="font-semibold text-lg">Security</h2>
                            <p className="text-gray-600">Manage security settings and access controls</p>
                        </div>
                    </div>
                    <button className="bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded">Edit</button>
                </div>
                <div className="flex items-center border-none  justify-between">
                    <div className="flex items-center ">
                        <CloudBackup className="w-13 h-13 p-3 text-sm dark:text-black bg-green-200 rounded-2xl" />
                        <div className="flex flex-col pl-4  space-x-2">
                            <h2 className="font-semibold text-lg">Backup & Restore</h2>
                            <p className="text-gray-600">Manage backup and restore options for your store data</p>
                        </div>
                    </div>
                    <button className="bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Settings