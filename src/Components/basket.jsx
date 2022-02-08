import React, { useState} from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";


const BasketPanel = (props) => {
  const [open, setOpen] = useState(false);

  let tempArr = []
  props.list.forEach(e=> {
    tempArr.push(e)

  })

  return (
    <Color>
      <Panel onClick={() => setOpen(!open)}>
        Basket -<span> £{props.total[0]} </span>
        <Num>{props.total[1]}</Num>
      </Panel>
      {open && (
        <Basket
          list={props.list}
          updateQuantity={props.add}
          handleRemove={props.remove}
          total={props.total}
        />
      )}
    </Color>
  );
};

const Basket = (props) => {
  return (
    <Container className="container">
      <Inner className="inner">
        {props.list.map((item) => (
          <BasketItem
            key={props.list.indexOf(item)}
            id={props.list.indexOf(item)}
            img={item.url}
            quantity={item.quantity}
            price={item.price}
            title={item.title}
            updateQuantity={props.updateQuantity}
            handleRemove={props.handleRemove}
          />
        ))}
      </Inner>
    </Container>
  );
};

const BasketItem = (props) => {
  const addQuantity = () => {
    props.updateQuantity(props.id, "+");
  };

  const minusQuantity = () => {
    props.updateQuantity(props.id, "-");
  };

  return (
    <Spacer>
      <Center>{props.title}</Center>
      <CatImage src={props.img} alt="Cat Image" />
      <Center>
        <button onClick={() => props.quantity > 0 && minusQuantity(props.id)}>
          -
        </button>
        {/* <span>{quantity}</span> */}
        <Quantity
          onChange={(e) => {
            props.updateQuantity(props.id, parseInt(e.target.value) || 0);
          }}
          value={props.quantity}
        />
        <button onClick={() => addQuantity(props.id)}>+</button>
        <Center>
          Price - £<span>{props.price}</span>
        </Center>
        <button onClick={() => props.handleRemove(props.id)}>Remove</button>
      </Center>
    </Spacer>
  );
};

export default BasketPanel;

const Container = styled.div`
  position: fixed;
  right: 32px;
  top: 53px;
  box-sizing: content-box;
  background: rgba(222, 222, 222, 0.7);
  overflow: hidden;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid #3b3a3a;
  max-height: 100vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 0 0 2rem 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  transition: 3s ease;
`;

const Quantity = styled.input`
  width: 20px;
  text-align: center;
`;

const Panel = styled.div`
  position: fixed;
  font-size: 1.2em;
  right: 0px;
  top: 0px;
  color: white;
  font-weight: 600;
  width: 285px;
  text-align: center;
  cursor: pointer;
  padding: 0.8rem 0rem;
  background-color: rgba(253, 203, 195, 0.87);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border: 1px solid #3b3a3a;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const CatImage = styled.img`
  width: 180px;
  border: 1px solid #3b3a3a;
  border-radius: 10px;
  pointer: cursor;
`;

const Spacer = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.25rem 2rem 0.3rem 0;
  border-bottom: 1px solid #3b3a3a;
`;

const Center = styled.div`
  margin: 0.4rem;
  text-align: center;
  font-weight: 600;
  button {
    padding: 0.5rem 1.5rem;
    margin: 0.25rem;
    background: rgba(253, 203, 195, 0.37);
    cursor: pointer;
    border-radius: 20px;
  }
`;

const Color = styled.div`
  max-width: 250px;
`;

const Num = styled.span`
  background-color: white;
  color: #3b3a3a;
  border-radius: 50px;
  padding: 0 0.4rem;
  margin-left: 0.5rem;
  border: 1px solid #3b3a3a;
  font-size: 0.8em;
  font-weight: 600;
`;

const Inner = styled.div`
  overflow: overlay;
  overflow-x: hidden;
  padding-bottom: 3rem;
`;
