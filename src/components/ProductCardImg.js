export default function ProductCardImg(props){
    return(
        <div className="product-card__img-container">
            <div className="product-card__img"></div>
            <img src={(require(`${props.image}`))} alt=${props.title} className="product-card__img"/>
        </div>
    )
}