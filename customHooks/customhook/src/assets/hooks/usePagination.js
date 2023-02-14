import useFetch from './useFetch';

function usePagination() {
    const {posts} = useFetch('')
    const [numberOfpage, setNumberOfPage] = useState(1);
    const postPerPage = 10;

    const lastPost = numberOfpage * postPerPage;
    const firstPost = lastPost - postPerPage;
    const currentPost = posts.slice(firstPost, lastPost)
    
    let pageNumber = [];
    for(let i=0;i<Math.ceil(posts.length/postPerPage); i+=1){
        pageNumber.push(i)
    }

    function next(){
        
    }

    function back(){
        
    }

  return {};
}

export default usePagination