import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'blogPostsDev');

export function getSortedPostsData() {
    // Get file names under /posts

    const fileNames = fs.readdirSync(postsDirectory);
    const posts: Array<Post> = new Array<Post>;
    fileNames.forEach((fileName) => {
        let post = { id: '', date: '', title: '' };
        // Remove ".md" from file name to get id
        post.id = fileName.replace(/\.md$/, '');


        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        post.date = matter(fileContents).data.date;
        post.title = matter(fileContents).data.title;

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

export type Post = {
    id: string
    date: string
    title: string
}