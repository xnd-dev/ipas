import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Post, getSortedPostsData } from '@/lib/posts';

type Props = {
    allPostsData: Post[]
}

export default function Blog({ allPostsData }: Props) {

    let aux = allPostsData.map(({ id, date, title }) => (
        <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
        </li>
    ))

    return (
        <>
            <Header />
            <section>
                <h2 >Blog</h2>
                <ul>
                    {aux}
                </ul>
            </section>
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
