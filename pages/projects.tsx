import Post from "../src/app/_components/post";
import RootLayout from './layout'
export default function Projects(){
    return(
        <RootLayout>
            <Post postIcon={"temp_nameless_icon"} postTitle={"Nameless"}
            postText= {"I&apos;m the sole developer on the project; Doing everything from planning and design, to engineering and art."}
            ></Post>
            <Post postIcon={"X"} postTitle={"Test Post"} postText={"This is also a test post"}></Post>
        </RootLayout>
    )
}