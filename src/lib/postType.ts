import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'blogPostsDev');

export function getSortedPostsData() {
    // Get file names under /posts

    const fileNames = fs.readdirSync(postsDirectory);
    const posts: Array<PostType> = new Array<PostType>;
    fileNames.forEach((fileName) => {

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        let post: PostType = matter(fileContents).data as PostType;

        //removing '.md' from filename to use as ID
        post.id = fileName.replace(/\.md$/, '');


        posts.push(post)
    });
    // Sort posts by date
    return posts.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostBySlug(slug: string): PostType {
    const fullPath = path.join(postsDirectory, slug + '.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    let post: PostType = matter(fileContents).data as PostType;

    //removing '.md' from filename to use as ID
    post.id = slug;

    // Use gray-matter to parse the post metadata section
    post.content = matter(fileContents).content;

    return post
}

export type PostType = {
    id: string
    date: string
    title: string
    content: string
    exerpt: string
    coverImage: string
}