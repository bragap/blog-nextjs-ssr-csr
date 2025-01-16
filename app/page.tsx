import { CreatePost } from "@/components/CreatePost"

export default async function PostsPage() {

    return (
        <div className="w-[50%] mx-auto p-10">
            <h1>Posts</h1>
            <CreatePost />
        </div>
    );
}
