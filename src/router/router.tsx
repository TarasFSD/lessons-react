import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/Users"
import PostsPage from "../pages/Posts"
import CommentsPage from "../pages/Comment"
import MainLayout from "../layout/MainLayout"

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element: <UsersPage />,
            },
            {
                path:'posts',
                element: <PostsPage />,
            },{
                path:'commets',
                element: <CommentsPage />,
            },
        ]
    }

]);