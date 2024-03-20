import React from 'react';

import { marked } from 'marked';

import { Header } from '../kit-components/Header';
import { ArticleProps } from '../articleTypes';
import { ArticleTitle, Container, StyledImage } from '../styles';

export const ArticleDetailsPage: React.FC<{id:string}> = (props) => {
    const article: ArticleProps = {
        id: '',
        subText: 'subText',
        headerText: 'headerText',
        image: {
            fields: {
                file: {
                    url: 'https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg'
                }
            }
        }
    };

    if (!article.subText) {
        console.error('post description is undefined');
        return <div>Loading...</div>;
    }
    const postDescription = marked.parse(article.subText) as string;

    return (
        <Container>
            <Header />
            <ArticleTitle>{article.headerText}</ArticleTitle>
            <div style={{ textAlign: 'center' }}>
                <StyledImage src={article.image.fields.file.url} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postDescription }}></div>
        </Container>
    );
};