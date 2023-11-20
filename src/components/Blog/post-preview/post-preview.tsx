import Link from 'next/link'
import DateFormatter from '../../date-formatter/date-formatter'
import CoverImage from '../cover-image/cover-image'
import { SectionContainer } from './post-preview.styles'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    slug: string
}

const PostPreview = ({
    title,
    coverImage,
    date,
    excerpt,
    slug,
}: Props) => {
    return (
        <SectionContainer>
            <div >
                <CoverImage slug={slug} title={title} src={coverImage} />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
                    {title}
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </SectionContainer>
    )
}

export default PostPreview