import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router";

const Profile = ({ user, getAccount }) => {
    let navigate = useNavigate();
    const update=()=>{
        navigate(`/update/${user._id}`)
    }
            console.log(user, "user");
    return (
        <div>
        <Card style={{ width: "18rem" }}>
            <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/600x315/cb/b6/1d/cbb61dc9f560a4e96c2c64f41a90ce3f.jpg"
            />
            <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem> {user.email}</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Profile;
