import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogPostsDev');

export async function getSortedPostsData() {
    // Get file names under /posts

    const fileNames = fs.readdirSync(postsDirectory);
    const posts: Array<PostType> = new Array<PostType>;
    fileNames.forEach(async (fileName) => {

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);


        //destructing matter data to PostType
        let post: PostType = matterResult.data as PostType;

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);

        post.content = processedContent.toString();

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

export async function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, slug + '.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    let post: PostType = matterResult.data as PostType;

    //removing '.md' from filename to use as ID
    post.id = slug;

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    post.content = processedContent.toString();


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