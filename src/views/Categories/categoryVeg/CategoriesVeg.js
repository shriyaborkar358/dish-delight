import "./CategoriesVeg.css"
import Data from "./../../../data/CategoriesVesdata"
import VegCard from "./../../../components/VegCard/VegCard"
import headerimg from "./header-img.jpg"
import Navbar from "./../../../components/Navbar/Navbar"
import Footer from "./../../../components/Footer/Footer"
import { useEffect, useState } from "react"


function CategoriesVeg() {

  const [filteredData, setFilteredData] = useState([...Data])
  const [searchText, setSearchText] = useState("")

  useEffect(()=>{
    if(!searchText){
      setFilteredData([...Data])
      return
    }

    const newData = Data.filter((dataObject)=>{
      return dataObject.title.toLowerCase().includes(searchText)
    })

    console.log(searchText, newData)

    setFilteredData([...newData])
  }, [searchText])

  return (
    <>
      <Navbar />
      <img src={headerimg} className="header-img" />
      <span className="head-title">Veg Delicious Food</span>

        <div className=" search-container d-flex align-items-center mx-auto w-75 ">
          <input 
            type="text" 
            placeholder="Search.." 
            className="seachbar rounded-5 m-2 py-2 px-2 fw-bold fs-5 w-50 d-block mx-auto border border-primary border-3"
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}
            />
        </div> 
   



      <div className="veg-container">

        {filteredData.map((blogObject, i) => {
          const {
            id,
            title,
            image,
            description,
            time,
            categories

          } = blogObject

          return (
          
          
          <VegCard title={title} image={image} description={description} time={time} id={id} categories={categories} />)
        })}
      </div>

      <Footer />

    </>
  )
}

export default CategoriesVeg

