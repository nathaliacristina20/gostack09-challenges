import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Nathalia Cristina",
          avatar: "https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
        },
        date: "04 Nov 2019",
        content: "Eu estou participando do bootcamp Gostack da Rocketseat e estou aprendendo muitas coisas legais! Acompanhem meu crescimento no Github: https://github.com/nathaliacristina20",
        comments: [
          {
            id: 1,
            author: {
              name: "Rocketseat",
              avatar: "https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
            },
            content: "Quando te oferecem um assento em um foguete você não pergunta qual assento, você simplesmente embarca."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
            },
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        ]
      },
    ]
  };

  render() {
    return (
      <>
        {this.state.posts.map(value =>
          <PostItem key={value.id} data={value} />)}
      </>
    )
  }

}

export default PostList;