import "./Resurs.css"
import ResursImg from "../../assets/resurs.png"
import ResursImg1 from "../../assets/resurs1.png"
import ResursImg2 from "../../assets/resurs2.png"
import ResursImg3 from "../../assets/resurs3.png"
import ResursImg4 from "../../assets/resurs4.png"

const ResursArr = [
    {
        img: ResursImg,
        title: "Скидки",
    },
    {
        img: ResursImg1,
        title: "Акции",
    },
    {
        img: ResursImg2,
        title: "Распродажа",
    },
    {
        img: ResursImg3,
        title: "Подарки",
    },
    {
        img: ResursImg4,
        title: "Подарки",
    },
    {
        img: ResursImg4,
        title: "Подарки",
    },
    {
        img: ResursImg,
        title: "Скидки",
    },
    {
        img: ResursImg1,
        title: "Акции",
    },
    {
        img: ResursImg2,
        title: "Распродажа",
    },
    {
        img: ResursImg3,
        title: "Подарки",
    },
    {
        img: ResursImg4,
        title: "Подарки",
    },
    {
        img: ResursImg4,
        title: "Подарки",
    },
    {
        img: ResursImg3,
        title: "Подарки",
    },
]

function Resurs() {
    return(
        <div className="container">
            <ul className="resurs">
                {
                    ResursArr.map((newLi , listEl) => {
                        return(
                            <li key={listEl} className="resurs-item">
                                <img className="resurs-item-img" src={newLi.img} alt="img"/>
                                <h2 className="resurs-item-title">{newLi.title}</h2>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Resurs;