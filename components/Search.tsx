"use client"
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Search() {
    const searchedValue = useRef("");
    const router = useRouter();
    const handleSearch = (event) => {
        event.preventDefault();
        if (searchedValue.current.value) {
            router.push("/search/" + searchedValue.current.value);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <div className="flex h-12">
                <input
                    ref={searchedValue}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search movies..."
                    required
                ></input>
            </div>
        </form>
    );
}