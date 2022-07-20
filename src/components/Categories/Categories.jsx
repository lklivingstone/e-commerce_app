import { styled } from '@material-ui/core';
import React from 'react';
import { categories } from '../../data/data';
import { Colors } from '../../styles/theme/theme';

const Container= styled("div")({
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
})

const Wrapper = styled("div")({
    flex: "1",
    margin: "3px",
    height: "70vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const Image = styled("img")({
    width: "80%",
    height: "80%",
    objectFit: "cover",
})

const InfoCont = styled("div")({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
})

const Title = styled("h1")({
    fontWeight: 500,
    fontSize: "21px",
    letterSpacing: "3px"
})

const Button = styled("Button")({
    fontSize: "17px",
    background: "transparent",
    padding: "8px 20px",
    cursor: "pointer"
})

const Categories = () => {
    return <Container>
            {categories.map((item)=> (
                <Wrapper key={item.id}>
                    <Image src={item.img} />
                    <InfoCont>
                        <Title>{item.title}</Title>
                        <Button>SHOP NOW</Button>
                    </InfoCont>
                </Wrapper>
                ))}
        </Container>;
};

export default Categories;