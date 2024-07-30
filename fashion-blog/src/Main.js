// src/Main.js
import React from 'react';

function Main() {
  return (
    <main>
      <article className="article-1">
        <h3 className="article-date">11/12/20</h3>
        <h3 className="article-title">On the Street in Brooklyn</h3>
        <div className="image-container">
          <img src="assets/images/blog-image-1.jpg" className="article-image" alt="image1" />
        </div>
        <p className="article-text">
        Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem
                deserunt nemo
                dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni
                aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at
                impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti
                optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet
                eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla
                eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur
                quas, quod quisquam quo ab molestiae.
        </p>
        <p className="article-continue">Continues ...</p>
      </article>
      <hr />
      <article className="article-2">
        <h3 className="article-date">11/11/20</h3>
        <h3 className="article-title">Vintage in Vogue</h3>
        <div className="image-container">
          <img src="assets/images/blog-image-2.jpg" className="article-image" alt="image2" />
        </div>
        <p className="article-text">
            Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem
            deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit
            officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus
            perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius
            quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat
            deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia
            quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur r
        </p>
        <p className="article-continue">Continues ...</p>
      </article>
      <hr />
    </main>
  );
}

export default Main;
