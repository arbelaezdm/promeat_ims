import React from "react";

const Inventory = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();
  console.log(navigate);

  useEffect(() => {
    axios.get("http://localhost:3050/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfPosts.map((value, key) => {
        return (
          <div
            className="post"
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
          >
            <div className="title">{value.title}</div>
            <div className="body">{value.userName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Inventory;
