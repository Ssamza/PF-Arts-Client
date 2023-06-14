import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllUser } from '../../redux/actions';
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import style from './Home.module.css';
import Footer from "../../components/Footer/Footer";

function Home() {

  const dispatch= useDispatch();
  const allUsers= useSelector((state)=>state.allUsers);
  const [filtered,setFiltered]= useState(allUsers);//se crea el estado local que toma el estado global
  const [searchString, setSearchString]= useState("");//|| || || que corresponde al string que se escribe en buscar

  function handleChange(event){
    event.preventDefault();//refrasca la pagina
    setSearchString(event.target.value)
  }

  function handleSubmit(event){//filtrado al dar buscar
    event.preventDefault();
    const filtered = allUsers.filter((user)=>
    user.name.includes(searchString)
      );
      setFiltered(filtered)
  }

  useEffect(()=>{
    dispatch(getAllUser())
  },[dispatch]);

  return (
    <div className={style['HomeViews']}>
      <Navbar className='navbar-style' handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allUsers={filtered} />
      <Footer/>
    </div>
  );
}

export default Home;
