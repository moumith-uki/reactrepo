import img1 from "../../assets/img.png"
import img2 from "../../assets/applewatch.avif"
import img3 from "../../assets/laptop.avif"
import img4 from "../../assets/Airphone-3-800x600.jpg"

export default function New(){
    const data = [
        {name:"Smartphone X",Description:"Latest gen smartphone with AI camera and stunning display",Price:"$999",image:img1},
        {name:"Laptop pro",Description:"Powerful light weight laptop for proffesionals on the go",Price:"$1499",image:img3},
        {name:"Smartwatch S",Description:"Track your fitness and stay connected with this sleek smart watch",Price:"$299",image:img2},
        {name:"Headphones Z",Description:"Immersive sound quality with noise cancelling technology",Price:"$199",image:img4}
    ]


    return(

        <>
            <div className="container m-4 d-flex">
                <div className="name">ElectroHub</div>
                <div className="nav">
                   <div className="navi"><a href="#">Home</a></div>
                   <div className="navi"><a href="#">Products</a></div>
                    <div className="navi"><a href="#">Categories</a></div>
                    <div className="navi"><a href="#">About</a></div>
                   <div className="navi"><a href="#">Testimonials</a></div>
                   <div className="navi"><a href="#">Contact</a></div>
                    <div className="navi"><button className="Shop btn btn-outline-primary">Shop Now</button></div>
                </div>
            </div>
            <div className="container2 m-4 text-center">
                <p className="display-3 fw-bold text-center">Discover the Future of Tech</p>
                <p className="text-center">Explore our curated selection of the latest and greatest electronic <br />Gadgets, from smartphones to smart home devices</p>
                <button className="explore btn btn-outline-primary">Explore Products</button>
            </div>
            <div className="container3">
                <div className="h2 text-center">Featured Products</div>
                {data.map(item=>(
                    <div className="col-3 card g-3 d-flex text-center">
                        <div className="pic">{item.image}</div>
                        <div className="card-title fw-bold fs-4">{item.name}</div>
                        <div className="card-body">{item.Description}</div>
                        <div className="card-body">{item.Price}</div>
                        <div className="btn btn-outline-warning">Buy Now</div>
                    </div>
                ))}
            </div>
        </>
    )
}