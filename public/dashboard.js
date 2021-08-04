const newFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#title').value.trim();
    const post_content = document.querySelector('#details').value.trim();
  
    if (username && post_content) {
      const response = await fetch(`/`, {
        method: 'POST',
        body: JSON.stringify({ title, post_content}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document.querySelector('.new-post-form')
    document.addEventListener('submit', newFormHandler);
  
  document.querySelector('.post-list')
    document.addEventListener('click', delButtonHandler);
  

    