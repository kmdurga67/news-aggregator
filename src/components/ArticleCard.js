import React from 'react';

const ArticleCard = ({ article }) => {
  const { title, description, url, urlToImage,publishedAt, webTitle, webUrl, webPublicationDate, web_url, abstract, headline, pub_date } = article;

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  
  
  return (
    <>
    {title && description && url && urlToImage && publishedAt && (<div className="border p-4 rounded-lg shadow-md">
      <img src={urlToImage} alt='noimagefound' />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-700 mb-4">{formatDate(publishedAt)}</p>
      <a href={url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>)}

    {webTitle && webUrl && webPublicationDate && (
      <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{webTitle}</h2>
      <p className="text-gray-700 mb-4">{formatDate(webPublicationDate)}</p>
      <a href={webUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
    )}

    { web_url && abstract && headline && pub_date && (<div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{headline.main}</h2>
      <p className="text-gray-700 mb-4">{abstract}</p>
      <p className="text-gray-700 mb-4">{formatDate(pub_date)}</p>
      <a href={web_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  )}
    
    </>
  );
};

export default ArticleCard;
