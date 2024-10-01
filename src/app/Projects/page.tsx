import Post from "../_components/post";
export default function Projects(){
    return(
        <>
            <p>Projects</p>
            <Post postIcon={"icon"} postText=
            {"This is my game 'Nameless'. I'm the sole developer on the project; Doing everything from planning and design, to engineering and art."}
            ></Post>
            <Post postIcon={"X"} postText={"This is also a test post"}></Post>
        </>
    )
}