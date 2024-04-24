import { NavLink } from "react-router-dom"

function Pagenotfound() {
    return (
        <main className="flex flex-col justify-start items-center h-[78.2vh] bg-white dark:bg-gray-800 dark:text-white">
            <div className="flex flex-col justify-center items-center h-[60%]">
                <h1 className="text-3xl mb-10">404 - Page not found</h1>
                <NavLink to="/">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
                        Go back to home
                    </button>
                </NavLink>
            </div>
        </main>
    )
}

export default Pagenotfound