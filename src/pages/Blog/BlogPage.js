import React from 'react';
import SingleBlog from './SingleBlog'

import {blogs} from './blog'

const BlogPage = () => {
    return (
        <div>
             <div className='lg:py-10'>
             {
                blogs.map(blog=><SingleBlog key={blog.id} blog={blog}></SingleBlog>)
            }
        </div>
        </div>
    );
};

export default BlogPage;