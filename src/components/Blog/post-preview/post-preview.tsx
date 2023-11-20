import Link from 'next/link'
import DateFormatter from '../../date-formatter/date-formatter'
import CoverImage from '../cover-image/cover-image'
import { SectionContainer } from './post-preview.styles'
import { PostType } from '@/lib/postType'

type Props = {
    post: PostType
}

const PostPreview = ({
    post
}: Props) => {

    return (
        <SectionContainer>
            <div >
                <CoverImage slug={post.id} title={post.title} src={post.coverImage} />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link as={`/blog/posts/${post.id}`} href="/blog/posts/[slug]">
                    {post.title}
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={post.date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{post.exerpt}</p>
        </SectionContainer>
    )
}

export default PostPreview