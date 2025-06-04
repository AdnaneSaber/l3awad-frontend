"use client"

import React, { Component } from 'react';
import Head from 'next/head';
import stylesheet from '@modules/in-construction/styles/main.css';

import Header from '@modules/in-construction/components/Header';
import Main from '@modules/in-construction/components/Main';
import Footer from '@modules/in-construction/components/Footer';

interface IndexPageState {
  isArticleVisible: boolean;
  timeout: boolean;
  articleTimeout: boolean;
  article: string;
  loading: string;
}

class IndexPage extends Component<{}, IndexPageState> {
  private timeoutId?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    };

    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article: string) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      });
    }, 350);
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      });
    }, 350);
  }

  render() {
    const { loading, isArticleVisible, timeout, articleTimeout, article } = this.state;

    return (
      <div className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
        <div>
          <Head>
            <title>Next.js Starter</title>
            <link
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
              rel="stylesheet"
            />
          </Head>

          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={timeout} />
            <Main
              isArticleVisible={isArticleVisible}
              timeout={timeout}
              articleTimeout={articleTimeout}
              article={article}
              onCloseArticle={this.handleCloseArticle}
            />
            <Footer timeout={timeout} />
          </div>

          <div id="bg" />
        </div>
      </div>
    );
  }
}

export default IndexPage;
