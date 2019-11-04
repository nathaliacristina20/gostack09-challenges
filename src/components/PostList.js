import React, { Component } from 'react';
import avatar from '../assets/avatar.jpeg';
import PostItem from './PostItem';

class PostList extends Component {

    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: "https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: "https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
                },
                content: "Conteúdo do comentário"
              }
            ]
          },
        ]
      };

    render() {
        return (
            <>
                <div className="timeline">
                    
                {this.state.posts.map(value => 
                    <PostItem key={value.id} data={value} />)}
                </div>
            </>
        )
    }

}

export default PostList;