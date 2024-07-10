import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Indvidualproperty() 
{
 const navigate = useNavigate();
 const {id} = useParams();
 const [listing, setListing] = useState({})
 const [comments, setComments] = useState([]);
 const [newComment, setNewComment] = useState({ name: '', rating: '', review: '' });
 const [editingCommentId, setEditingCommentId] = useState(null);
 
   useEffect(() => {
     fetch(`http://localhost:3000/listings/${id}`)
     .then((response) => response.json())
     .then((json) =>{
       setListing(json)
       setComments(json.comments)
     } );
   }, [id])

     const handleDelete = (id) => {
       fetch(`http://localhost:3000/listings/${id}`, {
        method: 'DELETE',
})
  .then(response => response.json())
  .then((response) => {
       navigate('/allproperties')
      toast.success('Listing deleted successfully !')
  })
    }




     //SO, HERE, I CANNOT PROCEED WITHOUT HAVING THE BACKEND PART. THE DB.JSON FILE CANNOT ACCOMODATE THESE FUNCTIONS
  // //   Fetch comments on component mount and when ID changes
  //   useEffect(() => {
  //     fetchComments();
  //   }, [id]);


  //     Function to handle form submission for adding or editing comment
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (editingCommentId) {
  // //     // Edit existing comment
  // //URL Backend
  //     fetch(``, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newComment),
  //     })
  //       .then(response => response.json())
  //       .then(() => {
  //         fetchComments(); // Refresh comments after edit
  //         setEditingCommentId(null); // Reset editing state
  //         setNewComment({ name: '', rating: '', review: '' }); // Clear form fields
  //       })
  //       .catch(error => console.error('Error editing comment:', error));
  //   } else {
  // //     // Add new comment
  //     //URL ya backend  
  //     fetch(``, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newComment),
  //     })
  //       .then(response => response.json())
  //       .then(() => {
  //         fetchComments(); // Refresh comments after add
  //         setNewComment({ name: '', rating: '', review: '' }); // Clear form fields
  //       })
  //       .catch(error => console.error('Error adding comment:', error));
  //   }
 



  // // Function to handle input changes in the form
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setNewComment({ ...newComment, [name]: value });
  // };

  // // Function to set the editing state and populate form fields
  // const handleEdit = (commentId) => {
  //   const commentToEdit = comments.find(comment => comment.id === commentId);
  //   setEditingCommentId(commentId);
  //   setNewComment({ ...commentToEdit });
  // };

  // // Function to cancel editing and reset form fields
  // const handleCancelEdit = () => {
  //   setEditingCommentId(null);
  //   setNewComment({ name: '', rating: '', review: '' });
  // };

  // // Function to delete a comment
  // const handleCommentDelete = (commentId) => {
  //   //Add database URL
  //   fetch(``, {
  //     method: 'DELETE',
  //   })
  //     .then(() => {
  //       fetchComments(); // Refresh comments after delete
  //     })
  //     .catch(error => console.error('Error deleting comment:', error));
  // };


  return (
    <div className='container mx-auto p-6'>
      

<div  className="bg-white p-6 rounded-lg shadow-lg">
    <div class="p-5">
       
           
         
            <img 
                className="rounded-lg mx-auto my-4 shadow h-[70vh] w-full object-cover" 
                src={listing.image} 
                alt={listing.title} 
            />
            <h5 className="text-4xl font-extrabold mb-4 p-6 text-center text-blue-700 underline">
                {listing.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 p-5 dark:text-gray-400">
                Desription : {listing.description}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Price : {listing.price}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Address : {listing.address}
            </p>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                 <p> <strong>All Comments</strong> </p>

                  {comments.map(comment => (
                  <ul>  
                    <li key={comment.id}>

                    <p><strong>Name: {comment.name}</strong></p>

                    <p>Rating: {comment.rating}</p>

                    <p>{comment.review}</p>

                    <button onClick={() => handleEdit(comment.id)}>Edit</button>

                    <button onClick={() => handleCommentDelete(comment.id)} class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" >Delete</button>
                    </li>
                  </ul>
                  ))}
                  
            </p>

            {/* Form for adding or editing comment : YOU CAN FORMAT*/}
      <form > {/* ADD THIS: onSubmit={handleSubmit}*/}
         <input type="text" name="name" placeholder="Name" value={newComment.name}  required /> {/* ADD THIS HERE: onChange={handleInputChange} */}
        <input type="number" name="rating" placeholder="Rating" value={newComment.rating} required /> {/* ADD THIS HERE: onChange={handleInputChange} */}
        <textarea name="review" placeholder="Review" value={newComment.review} required /> {/* ADD THIS HERE: onChange={handleInputChange} */}
        <button type="submit">{editingCommentId ? 'Edit Comment' : 'Add Comment'}</button>
        {editingCommentId && <button type="button" >Cancel Edit</button>} {/* ADD THIS HERE: onClick={handleCancelEdit} */}
      </form>
                
           
       
         
          <button onClick={() => handleDelete(listing.id)} type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
        
    </div>
</div>

      
    </div>
  )
}
