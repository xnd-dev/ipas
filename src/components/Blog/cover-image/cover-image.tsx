import Link from 'next/link';
import Image from 'next/image';
import { ImageContainer } from './cover-image.styles';

type Props = {
    title: string;
    src: string;
    slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
    const image = (
        <ImageContainer>
            <Image fill src={src} alt={`Cover Image for ${title}`} />
        </ImageContainer>
    )

    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
                    {image}
                </Link>
            ) : image}
        </div>
    );
};



export default CoverImage;
