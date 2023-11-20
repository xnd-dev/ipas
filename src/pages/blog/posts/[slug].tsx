import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
//import Container from '../../components/container'
//import PostBody from '../../components/post-body'
//import Header from '../../components/header'
//import PostHeader from '../../components/post-header'
//import Layout from '../../components/layout'
//import PostTitle from '../../components/post-title'
//import { CMS_NAME } from '../../lib/constants'
//import markdownToHtml from '../../lib/markdownToHtml'
import { PostType, getPostBySlug, getSortedPostsData } from '@/lib/postType'
import Layout from '@/components/ipas-layout/ipas-layout'
import Head from 'next/head'
import PostBody from '@/components/Blog/post-body/post-body'

type Props = {
    post: PostType
    morePosts: PostType[]
    preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
    const router = useRouter()

    console.log(post);
    if (!router.isFallback && !post?.id) {

        return <ErrorPage statusCode={404} />
    }
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <Layout>
                <PostBody content={post.content}></PostBody>
            </Layout>
        </>

    )
}

export default Post

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {


    const post = await getPostBySlug(params.slug)

    console.log(post);
    // , [
    //     'title',
    //     'date',
    //     'slug',
    //     'author',
    //     'content',
    //     'ogImage',
    //     'coverImage',
    // ])
    //const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                //content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = await getSortedPostsData()

    return {
        paths: posts.map((post: PostType) => {
            return {
                params: {
                    slug: post.id,
                },
            }
        }),
        fallback: false,
    }
}