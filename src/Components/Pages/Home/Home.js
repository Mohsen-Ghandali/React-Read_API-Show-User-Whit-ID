import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className="col-6 offset-3 p-5 text-white  bg-dark my-5">
      <h1 className="text=text-capitalize " >Home Page</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto sint cumque ab, sequi, debitis molestias laborum doloremque nulla qui dicta, neque aliquid blanditiis quisquam repellat excepturi consequatur? Temporibus minus fuga atque accusamus possimus debitis! Sed iusto non aliquam quos accusamus numquam, commodi facilis molestias voluptatibus dolorem amet impedit nisi.</p>

      <Link to="/users" className="btn btn-primary text-capitalize mx-2">users</Link>
    </div>
  );
}

export default Home;