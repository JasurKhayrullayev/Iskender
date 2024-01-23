import "./Category.css"
import CategoryImg from "../../assets/category.png"
import CategoryImg1 from "../../assets/category1.png"
import CategoryImg2 from "../../assets/category2.png"
import CategoryImg3 from "../../assets/category3.png"
import CategoryImg4 from "../../assets/category4.png"
import CategoryImg5 from "../../assets/category5.png"
import CategoryImg6 from "../../assets/category6.png"
import CategoryImg7 from "../../assets/category7.png"
import CategoryImg8 from "../../assets/category8.png"
import CategoryImg9 from "../../assets/category9.png"
import CategoryImg10 from "../../assets/category10.png"

const CategoryArr = [
    {
        title: "Ванны",
        amount:"3000 товаров",
        img: CategoryImg,
    },
    {
        title: "Смесители",
        amount:"3000 товаров",
        img: CategoryImg1,
    },
    {
        title: "Вытяжки для кухни",
        amount:"3000 товаров",
        img: CategoryImg2,
    },
    {
        title: "Кухонные мойки",
        amount:"3000 товаров",
        img: CategoryImg3,
    },
    {
        title: "Другие",
        amount:"3000 товаров",
        img: CategoryImg4,
    },
    {
        title: "Унитазы",
        amount:"3000 товаров",
        img: CategoryImg5,
    },
    {
        title: "Вытяжки для кухни",
        amount:"3000 товаров",
        img: CategoryImg2,
    },
    {
        title: "Умывальники",
        amount:"3000 товаров",
        img: CategoryImg6,
    },
    {
        title: "Полотенцесушители",
        amount:"3000 товаров",
        img: CategoryImg7,
    },
    {
        title: "Водонагреватели",
        amount:"3000 товаров",
        img: CategoryImg8,
    },
    {
        title: "Душевые",
        amount:"3000 товаров",
        img: CategoryImg9,
    },
    {
        title: "Водонагреватели",
        amount:"3000 товаров",
        img: CategoryImg10,
    },
    {
        title: "Водонагреватели",
        amount:"3000 товаров",
        img: CategoryImg10,
    },
    {
        title: "Полотенцесушители",
        amount:"3000 товаров",
        img: CategoryImg7,
    },
]

function Category() {
    return(
        <div className="container category-wrapper">
            <h2 className="category-title">Категории</h2>
            <ul className="category">
                {
                    CategoryArr.map((newLi , listEl) => {
                        return(
                            <li key={listEl} className="category-item">
                                <h3 className="category-item-title">{newLi.title}</h3>
                                <p className="category-item-amount">{newLi.amount}</p>
                                <img className="category-item-img" src={newLi.img} alt="img"/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Category;