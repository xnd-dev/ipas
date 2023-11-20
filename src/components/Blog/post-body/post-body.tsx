//import markdownStyles from './markdown-styles.module.css';

import { ArticleContainer } from "./post-body.styles";

type Props = {
    content: string;
};

const PostBody = ({ content }: Props) => {
    console.log('content', content);
    return (
        <ArticleContainer>
            <div
                //className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </ArticleContainer>
    );
};

export default PostBody;