import PostPreview from "@/components/Blog/post-preview/post-preview";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { PostType, getSortedPostsData } from '@/lib/postType';
import { PostPreviewsContainer, SectionContainer } from "./blog.styles";

type Props = {
    allPostsData: PostType[]
}

export default function Blog({ allPostsData }: Props) {

    return (
        <>
            <Header />
            <SectionContainer>
                <PostPreviewsContainer>
                    {allPostsData.map(({ id, date, title, exerpt, coverImage }) => (
                        <PostPreview title={title} date={date} coverImage={coverImage} excerpt={exerpt} slug={id} />
                    ))}
                </PostPreviewsContainer>
            </SectionContainer >
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: { allPostsData },
    }
}
