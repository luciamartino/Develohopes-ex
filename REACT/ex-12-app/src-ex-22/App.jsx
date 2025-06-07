import { Welcome } from "./Welcome";
import {BrowserRouter} from "react-router" 
import { Routes, Route } from "react-router";
import { Counter } from "./Counter";
import { Navigation } from "./Navigation";
import { GithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export function App(){
    return (
        <>
            <BrowserRouter>
            <Navigation />
                <Routes>
                    <Route path="/" element={<Welcome name={"joel"}/>} />
                    <Route path="/counter" element={<Counter initialValue={6}/>} />
                    <Route path="users" element={<GithubUserList />}>
                        <Route path=":username" element={<GithubUser />} />
                    </Route>
                    <Route path="*" element={<p>NOT FOUND</p>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}