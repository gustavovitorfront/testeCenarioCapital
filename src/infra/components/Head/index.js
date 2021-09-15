import React from 'react';
import PropTypes from 'prop-types'
import NextHead from 'next/head'

function Head({ titlePage, metaDescription, keywords }) {
    return (
        <NextHead>

            <title>
                {titlePage}
            </title>

            <meta name="description" content={metaDescription}></meta>
            <meta name="keywords" content={keywords}></meta>
            <meta name="robôs" content="noindex, nofollow"></meta>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0"></meta>
            <meta http-equiv="Content-Language" content="pt-br"></meta>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <meta name="author" content="Gustavo Vitor Quaresma de Oliveira"></meta>

        </NextHead>
    )
}

Head.propTypes = {
    titlePage: PropTypes.string.isRequired,
    metaDescription: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired
}

export default Head;