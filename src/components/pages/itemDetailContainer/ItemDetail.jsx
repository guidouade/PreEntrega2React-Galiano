import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import "./ItemDetail.css"
export const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
            {item.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Autor:</span>{" "}
            {item.autor}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> $
            {item.precio}.-
          </h2>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
          <ItemCountContainer 
            stock={item.stock}
          />
        </div>
      </div>
  );
};