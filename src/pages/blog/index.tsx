import PostPreview from "@/components/Blog/post-preview/post-preview";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { PostType, getSortedPostsData } from '@/lib/postType';
import { PostPreviewsContainer, SectionContainer } from "./blog.styles";
import Layout from "@/components/ipas-layout/ipas-layout";

type Props = {
    allPostsData: PostType[]
}

export default function Blog({ allPostsData }: Props) {

    return (
        <>
            <Layout>
                <SectionContainer>
                    <PostPreviewsContainer>
                        {allPostsData.map((post) => (
                            <PostPreview post={post} />
                        ))}
                    </PostPreviewsContainer>
                </SectionContainer >
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {
        props: { allPostsData },
    }
}
