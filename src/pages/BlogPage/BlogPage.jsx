import React, { useEffect, useState } from 'react';
import Blogcard from '../../components/blog/Blogcard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './Blog.css';

// Utility function to format date to '20 Jun, 2024'
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
};

const BlogComponent = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [categories, setCategories] = useState([]);
    const [commentData, setCommentData] = useState({ author: '', text: '' });
    const [showFullArticle, setShowFullArticle] = useState(false); // New state for toggling article

    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
            .then(response => {
                const fetchedBlogs = response.data;
                setBlogs(fetchedBlogs);
                setFilteredData(fetchedBlogs);
                extractCategories(fetchedBlogs);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    const extractCategories = (blogs) => {
        const uniqueCategories = [...new Set(blogs.map(blog => blog.category))];
        setCategories(['All', ...uniqueCategories]);
    };

    const getCategoryCount = (category) => {
        if (category === 'All') {
            return blogs.length;
        } else {
            return blogs.filter(blog => blog.category === category).length;
        }
    };

    const filterByCategory = (category) => {
        if (category === 'All') {
            setFilteredData(blogs);
        } else {
            setFilteredData(blogs.filter(blog => blog.category === category));
        }
    };

    const filterByTitle = (title) => {
        const article = blogs.find(blog => blog.title === title);
        setSelectedArticle(article);
        setShowFullArticle(false); // Reset when a new article is selected
    };

    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setSearchTerm(searchQuery);
        setFilteredData(blogs.filter(blog => blog.title.toLowerCase().includes(searchQuery)));
    };

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };


    // Render sections with View More functionality

    const renderSections = (text) => {
        const wordLimit = 250; // Limit the number of words to display before expanding
        const words = text.split(' ');
    
        // Split sections by numbers followed by a dot (e.g., "1.", "2.", etc.)
        const sections = text.split(/(?=\d+\.\s)/g);
    
        // Function to get truncated text with section respect
        const getTruncatedSections = () => {
            let wordCount = 0;
            let truncatedSections = [];
    
            // Loop through each section, but stop if word count exceeds the limit
            for (let section of sections) {
                const sectionWords = section.split(' ');
                wordCount += sectionWords.length;
    
                if (wordCount <= wordLimit) {
                    truncatedSections.push(section); // Add full section
                } else {
                    // Add only the remaining words to reach the word limit
                    const remainingWords = wordLimit - (wordCount - sectionWords.length);
                    truncatedSections.push(sectionWords.slice(0, remainingWords).join(' ') + '...');
                    break; // Stop once we've reached the word limit
                }
            }
    
            return truncatedSections;
        };
    
        // If full article is expanded or there are fewer words than the limit, show all sections
        if (words.length <= wordLimit || showFullArticle) {
            return (
                <>
                    {sections.map((section, index) => (
                        <section key={index}>
                            <p>{section}</p>
                        </section>
                    ))}
                    {words.length > wordLimit && (
                        <button className="read-more-btn" onClick={() => setShowFullArticle(false)}>
                            View Less
                        </button>
                    )}
                </>
            );
        } else {
            // Show only the truncated sections with the "View More" button
            const truncatedSections = getTruncatedSections();
            return (
                <>
                    {truncatedSections.map((section, index) => (
                        <section key={index}>
                            <p>{section}</p>
                        </section>
                    ))}
                    <button className="read-more-btn" onClick={() => setShowFullArticle(true)}>
                        View More
                    </button>
                </>
            );
        }
    };
    
        


    // Handle comment form input changes
    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setCommentData({ ...commentData, [name]: value });
    };

    // Handle comment submission
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (selectedArticle) {
            axios.post('http://localhost:5000/comments', {
                blog_id: selectedArticle.id,
                author: commentData.author,
                text: commentData.text,
                date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
                time: new Date().toLocaleTimeString(), // Current time
                authorImg: 'default-avatar.png' // Placeholder image URL for author
            })
            .then(() => {
                alert('Comment added successfully!');
                setCommentData({ author: '', text: '' }); // Clear the form
                setSelectedArticle({ ...selectedArticle, comments: [...selectedArticle.comments, commentData] });
            })
            .catch(error => {
                console.error('Error adding comment:', error);
            });
        }
    };

    return (
        <div className="Client cont">
            <div className="row">
                {selectedArticle ? (
                    <>
                        <div className="banner">
                            <h6 className="mb-3" style={{ color: 'rgb(152 137 150)' }}>
                                {selectedArticle.subtitle}
                            </h6>
                            <h1 className="mb-3 px-5">{selectedArticle.title}</h1>
                            <Row className="mx-5 flex flex-row ms-auto gap-3">
                                <Col className="d-flex align-items-center sub">
                                    <img
                                        src={selectedArticle.authorImg}
                                        alt="Author"
                                        style={{ width: '30px', borderRadius: '50%', marginRight: '8px' }}
                                    />
                                    <p className="mb-0">
                                        <strong>Author:</strong> {selectedArticle.author}
                                    </p>
                                </Col>
                                <Col className="d-flex align-items-center sub">
                                    <img src="calendar.svg" alt="authImg" style={{ width: '30px' }} />
                                    <p className="mb-0">{formatDate(selectedArticle.date)}</p>
                                </Col>
                                <Col className="d-flex align-items-center sub">
                                    <img src="comment.svg" alt="authImg" style={{ width: '30px' }} />
                                    <p className="mb-0"> {selectedArticle.comments.length} Comments </p>
                                </Col>
                            </Row>
                        </div>
                        <Row className="col-lg-9 full-article col-md-6 mb-4">
                            <Col xs={12} sm={2} md={3} lg={9} className="p-3" style={{ backgroundColor: 'aliceblue' }}>
                                <img src={selectedArticle.imageUrl} alt="Blog cover" style={{ width: '100%' }} />
                                <div className="px-3 mt-4" style={{ color: '#5c626e' }}>
                                    {renderSections(selectedArticle.text)}
                                </div>
                                <Row className="mb-4">
                                    <h3 className="mb-4">{selectedArticle.comments.length} Comments</h3>
                                    {selectedArticle.comments.map((comment, index) => (
                                        <div key={index} className="mb-4 p-3 border rounded bg-light">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3">
                                                    <img
                                                        src={comment.authorImg || 'default-avatar.png'}  // Use a default image if none is provided
                                                        alt="Author"
                                                        style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div className="comment-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <strong>{comment.author}</strong>
                                                        <small className="text-muted">{formatDate(comment.date)} {comment.time}</small>
                                                    </div>
                                                    <p className="mb-2">{comment.text}</p>
                                                    <hr className="mt-3" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Row>

                                {/* Add Comment Form */}
                                <form onSubmit={handleCommentSubmit} className="comment-form mt-4 p-3 border rounded">
                                    <h4 className="mb-4">Leave a Comment</h4>
                                    
                                    <div className="form-group mb-3">
                                        <label htmlFor="author" className="form-label">Your Name</label>
                                        <input
                                            type="text"
                                            id="author"
                                            name="author"
                                            className="form-control"
                                            placeholder="Enter your name"
                                            value={commentData.author}
                                            onChange={handleCommentChange}
                                            required
                                        />
                                        <div className="form-text">Please provide your name to leave a comment.</div>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <label htmlFor="comment" className="form-label">Your Comment</label>
                                        <textarea
                                            id="comment"
                                            name="text"
                                            className="form-control"
                                            placeholder="Write your comment here..."
                                            rows="4"
                                            value={commentData.text}
                                            onChange={handleCommentChange}
                                            required
                                        />
                                        <div className="form-text">Your comment should be respectful and relevant.</div>
                                    </div>
                                    
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-primary">Submit Comment</button>
                                    </div>
                                </form>
                            </Col>
                            <Col className='bg-white p-4 flex flex-col'>
                                        <Row className="mb-4">
                                            <p>Recent Articles</p>
                                            {filteredData.map((blog, index) => (
                                                <Button
                                                    key={index}
                                                    variant="outline-primary"
                                                    className="mr-2 mb-2 font-md"
                                                    onClick={() => filterByTitle(blog.title)}  // Filter by title and set the selected article
                                                >
                                                    {blog.title}
                                                </Button>
                                            ))}
                                            <Button variant="secondary" onClick={() => setSelectedArticle(null)}>
                                                Back to All Articles
                                            </Button>
                                        </Row>

                                    </Col>
                        </Row>
                    </>
                ) : (
                    <Row className="col-lg-9 col-md-6 mb-4">
                        <Col xs={12} sm={2} md={3} lg={9}>
                            {filteredData.map((blog, index) => (
                                <div key={index} className="mb-4">
                                    <Blogcard
                                        title={blog.title}
                                        text={blog.text}
                                        date={formatDate(blog.date)}
                                        comments={blog.comments.length}
                                        imageUrl={blog.imageUrl}
                                        onReadMore={() => handleArticleClick(blog)}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col className="sidbar p-4 flex flex-col">
                            <Row className="mb-4">
                                <Form.Control
                                    type="text"
                                    placeholder="Search by title"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="mr-sm-2"
                                />
                            </Row>
                            <Row className="mb-4">
                                <p>Categories:</p>
                                {categories.map((category, index) => (
                                    <Button
                                        key={index}
                                        className="mr-2 mb-2 sidbtn"
                                        onClick={() => filterByCategory(category)}
                                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <span>{category}</span>
                                        <span style={{ paddingLeft: '8px' }}>({getCategoryCount(category)})</span>
                                    </Button>
                                ))}
                            </Row>
                            <Row>
                                <p>Latest Post:</p>
                                {filteredData
                                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                                    .slice(0, 5)
                                    .map((blog, index) => (
                                        <div
                                            key={index}
                                            className="mb-4 d-flex px-0 align-items-start"
                                            style={{ width: "100%", cursor: "pointer" }}
                                            onClick={() => filterByTitle(blog.title)}
                                        >
                                            <div className="mr-3">
                                                <img
                                                    src={blog.imageUrl}
                                                    alt={blog.title}
                                                    style={{
                                                        width: '80px',
                                                        height: '55px',
                                                        borderRadius: '4px',
                                                        marginRight: '15px',
                                                        marginTop: '7px',
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <p style={{ marginBottom: '5px', color: '#d77f33', fontSize: '0.9rem' }}>
                                                    {formatDate(blog.date)}
                                                </p>
                                                <h5 style={{ marginBottom: '0', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                                    {blog.title}
                                                </h5>
                                            </div>
                                        </div>
                                    ))}
                            </Row>
                        </Col>
                    </Row>
                )}
            </div>
        </div>
    );
};

export default BlogComponent;
