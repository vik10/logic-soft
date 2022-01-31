import { CardContent, CardMedia, Typography, Card } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CardItem = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cardActive, setCardActive] = useState(false);

  return (
    <>
      <Card
        sx={{ maxWidth: 345, cursor: "pointer" }}
        id="cardItem"
        onClick={() => {
          navigate(`/productInfo/${props.obj.id}`);
        }}
        onMouseEnter={() => setCardActive(true)}
        onMouseLeave={() => setCardActive(false)}
        className={`${cardActive && "cardactive"}`}
      >
        <CardMedia
          component="img"
          height="140"
          image="https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg"
          alt="card-img"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-capitalize"
          >
            {props.obj.title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardItem;
